const { Router } = require("express");
const {
  getUserData,
  createUserData,
  loginData,
} = require("../controllers/user_Routes_Logic");
const User = require("../model/user_Schema");

const UserRouter = Router();

UserRouter.get("/", getUserData);
UserRouter.post("/", createUserData);
UserRouter.post("/login", loginData);
module.exports = UserRouter;
