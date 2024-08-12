const User = require("../model/user_schema");

const getUser = async (req, res) => {
  const data = await User.find();
  res.send(data);
};

const createUser = async (req, res) => {
  const data = await User.create(req.body);
  res.send(data);
};

const LoggedIn = async (req, res) => {
  let { email, password } = req.body;
  let isUser = await User.findOne({ email: email });

  if (!isUser) return res.send({ message: "user not found" });

  if (isUser.password !== password)
    return res.send({ message: "password is incorrect" });

  res.send(isUser);
};

module.exports = { getUser, createUser, LoggedIn };
