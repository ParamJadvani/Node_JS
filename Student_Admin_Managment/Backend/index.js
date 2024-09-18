const express = require("express");
const cors = require("cors");
const DBConnection = require("./config/DB");
const User = require("./routes/user_routes");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/users", User);

app.get("/", (req, res) => res.send("Welcome to the API !!"));

app.get("/filter", async (req, res) => {
  res.send("filter");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  DBConnection();
});
