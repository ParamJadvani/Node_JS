const { Router } = require("express");
const { getUser, createUser, LoggedIn } = require("../controllers/user");
const userRouter = Router();

userRouter.get("/", getUser);
userRouter.post("/", createUser);
userRouter.post("/login", LoggedIn);

module.exports = userRouter;
