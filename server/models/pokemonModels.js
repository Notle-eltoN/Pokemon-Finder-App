const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: {
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
    rarity: {
        type: String,
        required: true,
    },
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);
module.exports = Pokemon;
