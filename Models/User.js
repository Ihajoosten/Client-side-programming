const config = require('../Config/default.json');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');


var user = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    Phone: String,
    Password: String,
    IsAdmin: Boolean
});

module.exports = mongoose.model('User', user);

//custom method to generate authToken 
UserSchema.methods.generateAuthToken = function() { 
    const token = jwt.sign({ id: this.Id, isAdmin: this.IsAdmin }, config.get('myprivatekey')); //get the private key from the config file -> environment variable
    return token;
  }
  

//function to validate user 
function validateUser(user) {
    const schema = {
      name: Joi.string().min(3).max(50).required(),
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(3).max(255).required()
    };
  
    return Joi.validate(user, schema);
  }

exports.User = User; 
exports.validate = validateUser;