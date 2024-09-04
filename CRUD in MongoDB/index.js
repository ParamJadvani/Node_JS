const express = require("express");
const connect_DB = require("./config/DataBase");
const userRouter = require("./routes/user_routes");
const app = express();
const PORT = 3118;

app.use(express.json());
app.use("/users", userRouter);

app.get("/", async (req, res) => {
  res.send("Welcome to the API !");
});

app.listen(PORT, connect_DB());
