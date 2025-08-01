const mongoose = require('mongoose');

const writingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, enum: ['poem', 'story'], required: true },
    poet: { type: mongoose.Schema.Types.ObjectId, ref: 'Poet', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Writing', writingSchema);
