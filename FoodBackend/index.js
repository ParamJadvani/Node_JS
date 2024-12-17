const express = require("express");
const db = require("./config/db");
const apiRouter = require("./routes/router");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api", apiRouter);

app.get("/", (req, res) =>
  res.json({ message: "Welcome to the Food Backend API" })
);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  db();
});
