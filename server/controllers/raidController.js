const Raid = require('../models/raidModel');

// Get all raids
exports.getRaids = async (req, res) => {
    try {
        const raids = await Raid.find();
        res.json(raids);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new raid
exports.addRaid = async (req, res) => {
    const { gymName, bossName, latitude, longitude, timeLeft } = req.body;

    try {
        const raid = new Raid({
            gymName,
            bossName,
            latitude,
            longitude,
            timeLeft,
        });
        await raid.save();
        res.status(201).json(raid);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
