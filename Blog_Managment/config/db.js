const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  mongoose.connect(`${process.env.DB_URL}/BlogData`);
};

module.exports = connectDB;
