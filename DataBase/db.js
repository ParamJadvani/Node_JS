const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose.connect(
    "mongodb+srv://Jay-Kalsariya:Jay@mvc-node-js.bpk8opa.mongodb.net/?retryWrites=true&w=majority&appName=MVC-NODE-JS"
  );

  console.log("DB connection established");
};

module.exports = dbConnect;
