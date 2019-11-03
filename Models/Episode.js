const mongoose = require('mongoose');

var episode = new mongoose.Schema({
    SeasonNr = Number,
    EpisodeNr = Number,
    Name: String,
    Description: String,
    Duration: String,
});

module.exports = mongoose.model('Episode', episode);