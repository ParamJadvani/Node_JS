const mongoose = require("mongoose");

const User_Schema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  role: {
    type: String,
    required: true,
    enum: ["student", "admin"],
    default: "student",
  },
});

const UserModel = mongoose.model("User", User_Schema);
module.exports = UserModel;
