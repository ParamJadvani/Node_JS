// src/components/Home.jsx
import { useState, useEffect } from "react";
import Student from "./components/Student";
import Admin from "./components/Admin";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) return <Navigate to="/signup" />;

  return <div>{user.role === "student" ? <Student></Student> : <Admin />}</div>;
};

export default Home;
