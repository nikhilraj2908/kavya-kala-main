const Writing = require("../models/Writing");
const Poet = require("../models/Poet");

// Create a new writing
exports.createWriting = async (req, res) => {
    try {
        const { title, content, category, poetId } = req.body;

        const poet = await Poet.findById(poetId);
        if (!poet) return res.status(404).json({ error: "Poet not found" });

        const newWriting = new Writing({ title, content, category, poet: poetId });
        await newWriting.save();

        res.status(201).json({ message: "Writing created", writing: newWriting });
    } catch (error) {
        res.status(500).json({ error: "Failed to create writing", details: error.message });
    }
};

// Get all writings
exports.getAllWritings = async (req, res) => {
    try {
        const writings = await Writing.find().populate("poet");
        res.status(200).json(writings);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch writings" });
    }
};

// Get writings by poet ID
exports.getWritingsByPoet = async (req, res) => {
    try {
        const writings = await Writing.find({ poet: req.params.poetId }).populate("poet");
        res.status(200).json(writings);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch writings" });
    }
};

// Get writing by ID
exports.getWritingById = async (req, res) => {
    try {
        const writing = await Writing.findById(req.params.id).populate("poet");
        if (!writing) return res.status(404).json({ error: "Writing not found" });
        res.status(200).json(writing);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch writing" });
    }
};

// Update writing
exports.updateWriting = async (req, res) => {
    try {
        const updatedWriting = await Writing.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedWriting) return res.status(404).json({ error: "Writing not found" });
        res.status(200).json({ message: "Writing updated", writing: updatedWriting });
    } catch (error) {
        res.status(500).json({ error: "Failed to update writing" });
    }
};

// Delete writing
exports.deleteWriting = async (req, res) => {
    try {
        const deletedWriting = await Writing.findByIdAndDelete(req.params.id);
        if (!deletedWriting) return res.status(404).json({ error: "Writing not found" });
        res.status(200).json({ message: "Writing deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete writing" });
    }
};
