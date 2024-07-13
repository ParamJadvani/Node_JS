const mongoose = require("mongoose");

let Schema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", Schema);
module.exports = User;
