const multer = require("multer");
const User = require("../model/user_model");
const { response } = require("express");

const getData = async (req, res) => res.send(await User.find());

const getDataById = async (req, res) =>
  res.send(await User.findById(req.params.id));

const createData = async (req, res) => {
  const { file } = req;
  req.body.image = file?.path;

  await User.create(req.body);
  res.redirect("/users/login");
};

const updateData = async (req, res) =>
  res.send(await User.findByIdAndUpdate(req.params.id, req.body));

const deleteData = async (req, res) =>
  res.send(await User.findByIdAndDelete(req.params.id));

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

const SignUpPage = (req, res) => res.render("signup");
const LoginPage = (req, res) => res.render("login");

const LoginData = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  console.log(req.body);

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({ message: "User not found, please sign up." });
  }
  if (user?.password !== password) {
    return res
      .status(401)
      .send({ message: "Invalid password, please try again." });
  }

  res.cookie("id", user.id);
  res.redirect("/");
};

module.exports = {
  getData,
  getDataById,
  createData,
  updateData,
  deleteData,
  upload,
  SignUpPage,
  LoginPage,
  LoginData,
};
