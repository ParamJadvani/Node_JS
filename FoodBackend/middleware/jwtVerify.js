require("dotenv").config();
const JWT = require("jsonwebtoken");
const SECRET_KEY = process.env.secret_Key;

const GenerateToken = async (data) => {
  return new Promise((resolve, reject) => {
    JWT.sign(data, SECRET_KEY, (err, token) => {
      if (err) reject(err);
      else resolve(token);
    });
  });
};

const verifyToken = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }

  try {
    const decodedData = await new Promise((resolve, reject) => {
      JWT.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) reject(err);
        else resolve(decoded);
      });
    });

    req.user = decodedData;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = { GenerateToken, verifyToken };
