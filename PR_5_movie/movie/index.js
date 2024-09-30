const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.route");
const movieRoutes = require("./routes/movie.route");
const app = express();
const port = process.env.PORT;

dotenv.config();
app.use(express.json());

app.use("/user", userRoutes);
app.use("/movie", movieRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the movie API");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
