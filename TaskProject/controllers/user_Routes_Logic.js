const User = require("../model/user_Schema");

const getUserData = async (req, res) => {
  const data = await User.find();
  res.send(data);
};

const createUserData = async (req, res) => {
  const data = await User.create(req.body);
  res.status(201).send(data);
};

const loginData = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.send("Invalid username or password");
  }
  res.status(200).send({ message: "Login successful" });
};

module.exports = { getUserData, createUserData, loginData };
