// 1.Approach
// const express = require("express");
// const userRouter = express.Router();

// 2. Alternative Approach
const { Router } = require("express");
const {
  deleteData,
  getData,
  getDataById,
  createData,
  updateData,
  upload,
  LoginPage,
  SignUpPage,
  LoginData,
} = require("../controllers/user_controllers");
const isAuth = require("../middlewares/user_middlewares");
const userRouter = Router();

userRouter.get("/all", isAuth, getData);

userRouter.get("/id:id", isAuth, getDataById);

userRouter.get("/signup", SignUpPage);

userRouter.get("/login", LoginPage);

userRouter.post("/create", upload.single("image"), createData);
// userRouter.post("/create", upload.array("image", 5), createData);

userRouter.post("/login", LoginData);

userRouter.patch("/update:id", isAuth, updateData);

userRouter.delete("/delete:id", isAuth, deleteData);

module.exports = userRouter;
