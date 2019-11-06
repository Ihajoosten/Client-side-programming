import jwt from "jsonwebtoken";
const logger = require("../../config/config").logger;

export function generateJWT(user) {
  const tokenData = { username: user.username, id: user.id };
  return jwt.sign({ user: tokenData}, process.env.TOKEN_SECRET, {
    "algorithm": "HS256",
    expiresIn: 86400 // expires in 24 hours
  });
}

export function requireLogin(req, res, next) {
  const token = decodeToken(req);
  if (!token) {
    return res.status(401).json({ message: "You must be logged in." });
  }
  next();
}

export function decodeToken(req, res) {
  const token = req.headers['authorization'];
  logger.trace(token);

  if (!token) {
    return "Fuck this shit";
  }

  jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
    if (err) {
        logger.error(err);
        return res.json({ success: false, message: 'Failed to authenticate token.' });
    } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
    }
});
}

export function getUsername(req) {
  const token = req.headers['authorization'].replace(/^JWT\s/, '');

  if (!token) {
    return null;
  }
  return token.user.username;
}

export function getUserId(req) {
  const token = req.headers['authorization'].replace(/^JWT\s/, '');

  if (!token) {
    return null;
  }
  console.warn(token);
  return token;
}
