const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gpxData: {
        type: String, // Store GPX file data as a string
        required: true,
    },
});

const Route = mongoose.model('Route', routeSchema);
module.exports = Route;
