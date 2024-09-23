const Product = require("../model/product");
const User = require("../model/user_model");

const loginPage = async (req, res) => {
  res.render("login", { message: "" });
};

const signupPage = async (req, res) => {
  res.render("signup");
};

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const image = req.file.path;
  const newUser = new User({ name, email, password, image });
  console.log(newUser);
  await newUser.save();
  res.redirect("/users/login");
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.render("login", {
      message: "Invalid email or password",
    });
  }
  const isMatch = password === user.password;
  if (!isMatch) {
    return res.render("login", {
      message: "Invalid email or password",
    });
  }
  res.cookie("token", user._id);
  const product = await Product.find();
  console.log(product);
  return res.cookie("product", product).status(200).redirect("/");
};
module.exports = { loginPage, signupPage, signup, login };
