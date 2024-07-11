const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose.connect("mongodb+srv://jadvaniparam:rajatsinha@cluster0.pl2wd2n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  console.log('DB connection established');
};

module.exports = dbConnect;
