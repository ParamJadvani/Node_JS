import { createUser } from "../../components/user_api.js";

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = {
    name,
    email,
    password,
  };
  createUser(user)
    ? (window.location.href = "login.html")
    : alert("user already exists");
});
