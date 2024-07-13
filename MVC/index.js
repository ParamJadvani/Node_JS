const express = require("express");
const connectDB = require("./config/DataBase");
const app = express();
const { Routes } = require("express");
const { hi } = require("./routes/UserRoutes");


app.use(express.json());
app.use('/users',hi)

app.listen(3118, () => {
  console.log(`Server is running on port 3118`);
  connectDB();
});


// POST http://localhost:3000/api/users
