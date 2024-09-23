const User = require("../model/user_model");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.redirect("/users/login");
    }
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Authentication error",
      error: error.message,
    });
  }
};

module.exports = auth;
