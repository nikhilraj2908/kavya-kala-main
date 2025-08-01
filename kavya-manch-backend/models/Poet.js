const mongoose = require('mongoose');

const poetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String },
    image: { type: String }, // URL or file path
}, { timestamps: true });

module.exports = mongoose.model('Poet', poetSchema);
