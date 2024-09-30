const express = require("express");
const router = express.Router();
const {
  getUser,
  createUser,
  deleteUser,
  accountVerification,
  loginUser,
} = require("../controllers/user.controller.js");

router.get("/", getUser);
router.post("/signup", createUser);
router.post("/login", loginUser);
router.delete("/delete/:id", deleteUser);
router.get("/verify/:id/:otp", accountVerification);

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
