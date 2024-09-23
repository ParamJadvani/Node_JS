const express = require("express");
const upload = require("../middlewares/multer");
const {
  loginPage,
  signupPage,
  signup,
  login,
} = require("../controllers/user_controller");
const router = express.Router();

router.get("/login", loginPage);

router.get("/signup", signupPage);

router.post("/login", login);

router.post("/signup", upload.single("image"), signup);

module.exports = router;
