const Poet = require("../models/Poet");

// Create a new poet
exports.createPoet = async (req, res) => {
    try {
        const { name, bio, birthDate } = req.body;
        const newPoet = new Poet({ name, bio, birthDate });
        await newPoet.save();
        res.status(201).json({ message: "Poet created successfully", poet: newPoet });
    } catch (error) {
        res.status(500).json({ error: "Failed to create poet", details: error.message });
    }
};

// Get all poets
exports.getAllPoets = async (req, res) => {
    try {
        const poets = await Poet.find();
        res.status(200).json(poets);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch poets" });
    }
};

// Get single poet by ID
exports.getPoetById = async (req, res) => {
    try {
        const poet = await Poet.findById(req.params.id);
        if (!poet) return res.status(404).json({ error: "Poet not found" });
        res.status(200).json(poet);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch poet" });
    }
};

// Update poet
exports.updatePoet = async (req, res) => {
    try {
        const updatedPoet = await Poet.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPoet) return res.status(404).json({ error: "Poet not found" });
        res.status(200).json({ message: "Poet updated", poet: updatedPoet });
    } catch (error) {
        res.status(500).json({ error: "Failed to update poet" });
    }
};

// Delete poet
exports.deletePoet = async (req, res) => {
    try {
        const deletedPoet = await Poet.findByIdAndDelete(req.params.id);
        if (!deletedPoet) return res.status(404).json({ error: "Poet not found" });
        res.status(200).json({ message: "Poet deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete poet" });
    }
};
