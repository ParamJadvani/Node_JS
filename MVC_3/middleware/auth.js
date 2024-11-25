const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const JWT_Secret = process.env.JWT_Secret || "Private-Key_Not_Available";

const generateToken = async (data) => {
  return await jwt.sign(data, JWT_Secret);
};

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token Not Exist" });
    }

    try {
      const decode = await jwt.verify(token, JWT_Secret);
      if (!decode) {
        return res.status(401).json({ message: "Token Not Valid" });
      }
      return next();
    } catch (error) {
      console.error("Error verifying token:", error);
      return res.status(401).json({ message: "Error Verifying Token" });
    }
  } catch (error) {
    console.error("Error handling token:", error);
    return res.status(401).json({ message: "Token Not Exist" });
  }
};

module.exports = { generateToken, isAuth };
