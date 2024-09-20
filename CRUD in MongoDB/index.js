const express = require("express");
const connect_DB = require("./config/DataBase");
const userRouter = require("./routes/user_routes");
const app = express();
const path = require("path");
const ejs = require("ejs");
const cors = require("cors");
const isAuth = require("./middlewares/user_middlewares");
const cookieParser = require("cookie-parser");
const PORT = 3118;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(cors());
app.use(cookieParser());

// Serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Set EJS as templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

// Routes
app.use("/users", userRouter);
app.get("/", isAuth, (req, res) => res.render("index"));

// Connect to database and then start the server
app.listen(PORT, connect_DB());
