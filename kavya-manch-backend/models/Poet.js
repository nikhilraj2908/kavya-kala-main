const mongoose = require('mongoose');
const { Schema } = mongoose;

const PoetSchema = new Schema({
  name: { type: String, required: true, trim: true },
  aka: { type: String, trim: true },
  era: { type: String, trim: true },
  avatarUrl: { type: String, trim: true },
  bioShort: { type: String, trim: true },
  bio: { type: String, trim: true },
  languages: [{ type: String, enum: ['hi', 'en'], default: 'hi' }],
  featured: { type: Boolean, default: false },
  followersCount: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Poet', PoetSchema);
