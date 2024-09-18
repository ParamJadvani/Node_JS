const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const DBConnection = async () => {
  await mongoose.connect(process.env.MongoDBURL);
  console.log("Connected to MongoDB");
};

module.exports = DBConnection;
