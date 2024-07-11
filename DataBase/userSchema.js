const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
