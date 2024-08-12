import { Loginuser } from "../../components/user_api.js";

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const user = {
    email,
    password,
  };
  Loginuser(user)
    ? (window.location.href = "index.html")
    : alert("Please enter valid information");
});
