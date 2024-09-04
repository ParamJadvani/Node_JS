const User = require("../model/user_model");

const getData = async (req, res) => res.send(await User.find());

const getDataById = async (req, res) =>
  res.send(await User.findById(req.params.id));

const createData = async (req, res) =>
  res.status(201).send(await User.create(req.body));

const updateData = async (req, res) =>
  res.send(await User.findByIdAndUpdate(req.params.id, req.body));

const deleteData = async (req, res) =>
  res.send(await User.findByIdAndDelete(req.params.id));

module.exports = {
  getData,
  getDataById,
  createData,
  updateData,
  deleteData,
};
