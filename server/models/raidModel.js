const mongoose = require('mongoose');

const raidSchema = new mongoose.Schema({
    gymName: {
        type: String,
        required: true,
    },
    bossName: {
        type: String,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    timeLeft: {
        type: String,
        required: true,
    },
});

const Raid = mongoose.model('Raid', raidSchema);
module.exports = Raid;
