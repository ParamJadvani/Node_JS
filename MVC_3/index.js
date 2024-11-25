const express = require("express");
const connectDB = require("./config/db");
const UserRouter = require("./routes/UserRoutes");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", UserRouter);

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the New Revision of API" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
