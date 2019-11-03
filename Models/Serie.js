const mongoose = require('mongoose');

var serie = new mongoose.Schema({
    Name: String,
    Description: String,
    PublishYear: String,
    Director: String
});

module.exports = mongoose.model('Serie', serie);