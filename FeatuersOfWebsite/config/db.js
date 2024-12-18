const { default: mongoose } = require("mongoose");

const dbconnection = async () => {
  await mongoose.connect("mongodb://localhost:27017");
};

module.exports = dbconnection;
