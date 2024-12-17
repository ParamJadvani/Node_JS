const { login, signup } = require("../controllers/authController");

const userRouter = require("express").Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);

module.exports = userRouter;
