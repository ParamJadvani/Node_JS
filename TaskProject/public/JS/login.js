import { getUserData, Loginuser } from "../../components/api_user.js";

const loginForm = async (e) => {
  e.preventDefault();
  const data = await getUserData();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const user = {
    email,
    password,
  };
  console.log(data, user);
  Loginuser(user);
};

document.getElementById("loginForm").addEventListener("submit", loginForm);
