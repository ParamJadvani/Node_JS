const {
  getAllData,
  signup,
  login,
  deleteUser,
  updateUser,
} = require("../controllers/UserControllers");
const { isAuth } = require("../middleware/auth");

const UserRouter = require("express").Router();

UserRouter.get("/", isAuth, getAllData);

UserRouter.post("/signup", signup);

UserRouter.post("/login", login);

UserRouter.delete("/delete/:id", isAuth, deleteUser);

UserRouter.patch("update/:id", isAuth, updateUser);

module.exports = UserRouter;
