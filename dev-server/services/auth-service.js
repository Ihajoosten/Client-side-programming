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

export function decodeToken(req) {
  const token = req.headers['authorization'].replace(/^JWT\s/, '');
  if (!token) {
    logger.error("invalid token")
    return null;
  }

  try {
    const payload = jwt.decode(token);
    logger.debug(payload);
    return payload;
    //return jwt.verify(token, process.env.TOKEN_SECRET);
  } catch (error) {
    logger.error(error);
    return null;
  }
}

export function getUsername(req) {
  const token = decodeToken(req);
  if (!token) {
      return null;
  }
  return token.user.username;
}

export function getUserId(req) {
  const token = decodeToken(req);
  if (!token) {
      return null;
  }
  return token.user.id;
}