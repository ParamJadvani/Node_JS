const express = require("express");
const cookieParser = require("cookie-parser");
const ejs = require("ejs");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
``;
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
const userRoutes = require("./routes/user_routes");
const productRoutes = require("./routes/product_routes");
const auth = require("./middlewares/auth");
app.use("/users", userRoutes);
app.use("/product", productRoutes);

app.use("/", auth, (req, res) => {
  res.render("home", { product: [], message: "" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
