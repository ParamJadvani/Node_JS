const User = require("../models/user.schema");
const sendMail = require("../service/service");

let otps = new Map();

const generateOtp = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

const getUser = async (req, res) => {
  const user = await User.find();
  res.send(user);
};

const createUser = async (req, res) => {
  let { email, password, name } = req.body;
  let user = await User.findOne({ email: email });
  if (user) {
    return res.send({ email: user.email, msg: "User already exists" });
  } else {
    user = await User.create({ email, password, name });
    res.send(user);
    let otp = generateOtp();
    otps.set(email, otp);
    const html = `<h1> ${user.name} , otp : ${otp} </h1> 
             <a href="http://localhost:8090/user/verify/${user.id}/${otp} >Verify your account </a>`;
    await sendMail(email, "account verification", html);
    res.send({ msg: "OTP sent to your email" });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.send({ msg: "Delete User" });
};

const accountVerification = async (req, res) => {
  const { id, otp } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return res.send({ msg: "User not found" });
  }
  if (otps.get(user.email) === otp) {
    user.verified = true;
    await user.save();
    res.send({ msg: "Account Verified" });
  } else {
    res.send({ msg: "Invalid OTP" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.send({ msg: "User not found" });
  }
  if (user.password === password && user.verified) {
    res.cookie("userId", user._id);
    res.send({ msg: "Login Success" });
  } else {
    res.send({ msg: "Invalid Password" });
  }
};

module.exports = {
  getUser,
  createUser,
  deleteUser,
  accountVerification,
  loginUser,
};
