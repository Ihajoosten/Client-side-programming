"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateJWT = generateJWT;
exports.requireLogin = requireLogin;
exports.decodeToken = decodeToken;
exports.getUsername = getUsername;
exports.getUserId = getUserId;

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = require("../../config/config").logger;

function generateJWT(user) {
  var tokenData = { username: user.username, id: user.id };
  return _jsonwebtoken2.default.sign({ user: tokenData }, process.env.TOKEN_SECRET, {
    "algorithm": "HS256",
    expiresIn: 86400 // expires in 24 hours
  });
}

function requireLogin(req, res, next) {
  var token = decodeToken(req);
  if (!token) {
    return res.status(401).json({ message: "You must be logged in." });
  }
  next();
}

function decodeToken(req) {
  var token = req.headers['authorization'].replace(/^JWT\s/, '');
  if (!token) {
    logger.error("invalid token");
    return null;
  }

  try {
    var payload = _jsonwebtoken2.default.decode(token);
    return payload;
  } catch (error) {
    logger.error(error);
    return null;
  }
}

function getUsername(req) {
  var token = decodeToken(req);
  if (!token) {
    return null;
  }
  return token.user.username;
}

function getUserId(req) {
  var token = decodeToken(req);
  if (!token) {
    return null;
  }
  return token.user.id;
}