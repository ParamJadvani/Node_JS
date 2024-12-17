const { default: mongoose } = require("mongoose");
require("dotenv").config();

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('connect to mongoose'); 
  } catch (error) {
    console.log(error);
  }
};

module.exports = db;
