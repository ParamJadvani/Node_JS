const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to Database Sucessfully");
  } catch (error) {
    console.error("Error connecting to Database:", error.message);
  }
};

module.exports = connectDB;
