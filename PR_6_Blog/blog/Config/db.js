const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const DataBaseConnect = async () => {
  try {
    await mongoose.connect(process.env.Mongo_URL);
    console.log("DataBase Sucessfully connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = DataBaseConnect;
