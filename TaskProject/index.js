const express = require("express");
const dbConnection = require("./config/db");
const app = express();
const cors = require("cors");
const UserRouter = require("./routes/user_Routes");
const { TaskRouter } = require("./routes/task_Routes");
const PORT = 3118;

app.use(cors());
app.use(express.json());
app.use("/users", UserRouter);
app.use("/tasks", TaskRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbConnection();
});
