const Route = require('../models/routeModel');

// Get all routes
exports.getRoutes = async (req, res) => {
    try {
        const routes = await Route.find();
        res.json(routes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new route
exports.addRoute = async (req, res) => {
    const { name, gpxData } = req.body;

    try {
        const route = new Route({
            name,
            gpxData,
        });
        await route.save();
        res.status(201).json(route);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
