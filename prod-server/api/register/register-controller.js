"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;

var _stringUtility = require("../../utilities/string-utility.js");

var _userModel = require("../../model/user-model");

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function index(req, res) {
  var validation = validateIndex(req.body);
  if (!validation.isValid) {
    return res.status(400).json({ message: validation.message });
  }

  var user = new _userModel2.default({
    username: req.body.username,
    password: req.body.password,
    first: req.body.first,
    last: req.body.last
  });
  user.save(function (error) {
    if (error) {
      if (error === 11000) {
        return res.status(403).json({ message: "Username is already taken" });
      }
      return res.status(500).json({ message: "Server error" });
    }
    return res.status(201).json({ message: "Added new user!", status: 201, user: req.body });
  });
}

function validateIndex(body) {
  var errors = "";
  if (_stringUtility.StringUtility.isEmpty(body.username)) {
    errors += "Username is required.";
  }

  if (_stringUtility.StringUtility.isEmpty(body.password)) {
    errors += "Password is required.";
  }

  if (_stringUtility.StringUtility.isEmpty(body.first)) {
    errors += "First name is required.";
  }

  if (_stringUtility.StringUtility.isEmpty(body.last)) {
    errors += "Last name is required.";
  }

  return {
    isValid: _stringUtility.StringUtility.isEmpty(errors),
    message: errors
  };
}