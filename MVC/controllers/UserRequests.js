const userModel = require("../models/Schema");

const getUser = (req, res) => {
  res.send("Welcome to the DataBase");
};

const createUser = async (req, res) => {
  const data = await userModel.create(req.body);
  res.send(data);
};

module.exports = { getUser, createUser };
