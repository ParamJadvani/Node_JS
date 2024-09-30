const express = require("express");
const {
  signup,
  deleteUser,
  login,
  getAllUsers,
} = require("../controllers/user.controller");
const { validateUserData } = require("../middlewares/user.middleware");
const router = express.Router();

router.post("/signup", validateUserData, signup);
router.post("/login", login);
router.delete("/delete/:id", deleteUser);
router.get("/", getAllUsers);

module.exports = router;
