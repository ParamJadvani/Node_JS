const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.route");
const productRoutes = require("./routes/product.route");
const path = require("path");
const ejs = require("ejs");
const port = process.env.PORT || 8090;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
