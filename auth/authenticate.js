const jwt = require("jsonwebtoken");

const jwtKey =
  process.env.JWT_SECRET ||
  "add a .env file to root of project with the JWT_SECRET variable";

// quickly see what this file exports
module.exports = {
  authenticate,
  createToken
};

// implementation details
function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({
      error: "No token provided, must be set on the Authorization Header"
    });
  }
}

function createToken(user) {
  const payload = {
    userid: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "1h"
  };
  const token = jwt.sign(payload, jwtKey, options);
  return token;
}
