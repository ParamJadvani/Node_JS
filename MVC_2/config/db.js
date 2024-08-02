const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  mongoose.connect(process.env.DB_URL);
  console.log("Connection to database Successfully");
};

module.exports = connectDB;
