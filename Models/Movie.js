const mongoose = require('mongoose');

var movie = new mongoose.Schema({
    Name: String,
    Description: String,
    PublishYear: String,
    Duration: String,
    Director: String
});

module.exports = mongoose.model('Movie', movie);