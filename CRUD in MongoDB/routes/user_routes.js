// 1.Approach
// const express = require("express");
// const userRouter = express.Router();

// 2. Alternative Approach
const { Router } = require("express");
const check_Post_Data = require("../middlewares/user_middlewares");
const {
  deleteData,
  getData,
  getDataById,
  createData,
  updateData,
} = require("../controllers/user_controllers");
const userRouter = Router();

userRouter.get("/", getData);

userRouter.get("/:id", getDataById);

userRouter.post("/", check_Post_Data, createData);

userRouter.patch("/:id", updateData);

userRouter.delete("/:id", deleteData);

module.exports = userRouter;
