import { createUser } from "../../components/api_user.js";

const signupData = (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = {
    name,
    email,
    password,
  };
  createUser(user);
};

document.getElementById("signupForm").addEventListener("submit", signupData);
