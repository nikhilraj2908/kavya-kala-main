const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');

// POST /api/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Correct: compare plain password with hashed password
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', email: admin.email });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
