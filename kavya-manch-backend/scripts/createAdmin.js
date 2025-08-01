const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');
require('dotenv').config();

// Connect to your MongoDB
mongoose.connect(`${process.env.MONGO_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function createAdmin() {
  const email = 'nikhilraj2908@gmail.com';
  const plainPassword = 'Nikhil@123';

  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const admin = new Admin({ email, password: hashedPassword });

  try {
    await admin.save();
    console.log('✅ Admin created successfully!');
  } catch (err) {
    console.error('❌ Error creating admin:', err.message);
  } finally {
    mongoose.disconnect();
  }
}

createAdmin();


// run the script  'node scripts/createAdmin.js' for creating password into the database.