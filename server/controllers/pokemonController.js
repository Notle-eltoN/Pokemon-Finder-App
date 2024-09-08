const Pokemon = require('../models/pokemonModel');

// Get all Pokémon spawns
exports.getPokemonSpawns = async (req, res) => {
    try {
        const pokemon = await Pokemon.find();
        res.json(pokemon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new Pokémon spawn
exports.addPokemonSpawn = async (req, res) => {
    const { name, latitude, longitude, rarity } = req.body;

    try {
        const pokemon = new Pokemon({
            name,
            latitude,
            longitude,
            rarity,
        });
        await pokemon.save();
        res.status(201).json(pokemon);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
