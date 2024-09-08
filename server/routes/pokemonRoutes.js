const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// Get all Pokémon spawns
router.get('/', pokemonController.getPokemonSpawns);

// Add a new Pokémon spawn
router.post('/', pokemonController.addPokemonSpawn);

module.exports = router;
