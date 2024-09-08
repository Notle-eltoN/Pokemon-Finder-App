const express = require('express');
const router = express.Router();
const raidController = require('../controllers/raidController');

// Get all raids
router.get('/', raidController.getRaids);

// Add a new raid
router.post('/', raidController.addRaid);

module.exports = router;
