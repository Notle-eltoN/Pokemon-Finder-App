const express = require('express');
const router = express.Router();
const routeController = require('../controllers/routeController');

// Get all routes
router.get('/', routeController.getRoutes);

// Add a new route
router.post('/', routeController.addRoute);

module.exports = router;
