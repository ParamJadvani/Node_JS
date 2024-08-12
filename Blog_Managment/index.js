const express = require("express");
const connectDB = require("./config/db");
const userRouter = require("./routes/user_routes");
const blogRouter = require("./routes/blog_routes");
const cors = require("cors");
const app = express();
const PORT = 3118;

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/blogPost", blogRouter);

app.get("/", async (req, res) => {
  res.send("Welcome to my API!");
});

app.listen(PORT, () => {
  connectDB();
});
