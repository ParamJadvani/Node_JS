const { GenerateToken } = require("../middleware/jwtVerify.js");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
require("dotenv").config();

// User Signup
 const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const token = await GenerateToken({
      user: user.name,
      email: user.email,
      role: user.role,
    });

    await user.save();
    res
      .status(201)
      .json({ success: true, message: "User registered successfully", token });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// User Login
 const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return next(new ErrorResponse("Invalid credentials", 401));

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return next(new ErrorResponse("Invalid credentials", 401));

    const token = await GenerateToken({
      user: user.name,
      email: user.email,
      role: user.role,
    });

    res.status(200).json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

module.exports = {
  signup,
  login,
};
