const Poet = require('../models/Poet');
const User = require('../models/User');

// GET /api/poets?q=&language=&era=&featured=
exports.list = async (req, res) => {
  const { q, language, era, featured } = req.query;
  const filter = {};
  if (q) filter.$or = [
    { name: { $regex: q, $options: 'i' } },
    { aka: { $regex: q, $options: 'i' } },
    { bioShort: { $regex: q, $options: 'i' } },
  ];
  if (language && language !== 'all') filter.languages = language;
  if (era && era !== 'all') filter.era = { $regex: era, $options: 'i' };
  if (featured !== undefined) filter.featured = featured === 'true';

  const poets = await Poet.find(filter).sort({ featured: -1, name: 1 }).lean();
  res.json(poets.map(p => ({ id: p._id, ...p })));
};

// GET /api/poets/featured
exports.featured = async (_req, res) => {
  const poets = await Poet.find({ featured: true }).sort({ name: 1 }).lean();
  res.json(poets.map(p => ({ id: p._id, ...p })));
};

// GET /api/poets/:id
exports.getOne = async (req, res) => {
  const p = await Poet.findById(req.params.id).lean();
  if (!p) return res.status(404).json({ message: 'Poet not found' });
  res.json({ id: p._id, ...p });
};

// POST /api/poets (admin)
exports.create = async (req, res) => {
  const poet = await Poet.create(req.body);
  res.status(201).json({ id: poet._id, ...poet.toObject() });
};

// PATCH /api/poets/:id (admin)
exports.update = async (req, res) => {
  const poet = await Poet.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean();
  if (!poet) return res.status(404).json({ message: 'Poet not found' });
  res.json({ id: poet._id, ...poet });
};

// DELETE /api/poets/:id (admin)
exports.remove = async (req, res) => {
  const r = await Poet.findByIdAndDelete(req.params.id).lean();
  if (!r) return res.status(404).json({ message: 'Poet not found' });
  res.json({ deleted: true });
};

// POST /api/poets/:id/toggle-featured (admin)
exports.toggleFeatured = async (req, res) => {
  const poet = await Poet.findById(req.params.id);
  if (!poet) return res.status(404).json({ message: 'Poet not found' });
  poet.featured = !poet.featured;
  await poet.save();
  res.json(poet.featured);
};

// POST /api/poets/:id/follow (auth)
exports.follow = async (req, res) => {
  const poetId = req.params.id;
  const userId = req.user.id;

  const poet = await Poet.findById(poetId);
  if (!poet) return res.status(404).json({ message: 'Poet not found' });

  const user = await User.findById(userId);
  if (!user) return res.status(401).json({ message: 'Unauthorized' });

  if (!user.followingPoets.some(id => id.equals(poet._id))) {
    user.followingPoets.push(poet._id);
    poet.followersCount += 1;
    await user.save();
    await poet.save();
  }
  res.json({ following: true, followersCount: poet.followersCount });
};

// POST /api/poets/:id/unfollow (auth)
exports.unfollow = async (req, res) => {
  const poetId = req.params.id;
  const userId = req.user.id;

  const poet = await Poet.findById(poetId);
  if (!poet) return res.status(404).json({ message: 'Poet not found' });

  const user = await User.findById(userId);
  if (!user) return res.status(401).json({ message: 'Unauthorized' });

  const before = user.followingPoets.length;
  user.followingPoets = user.followingPoets.filter(id => !id.equals(poet._id));
  if (user.followingPoets.length !== before && poet.followersCount > 0) {
    poet.followersCount -= 1;
  }
  await user.save();
  await poet.save();

  res.json({ following: false, followersCount: poet.followersCount });
};
