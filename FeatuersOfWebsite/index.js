const express = require("express");
const dbconnection = require("./config/db");
const saveRoutes = require("./routes/saveRoutes");
const commentRoutes = require("./routes/commentRoutes");
const SuggestionUpdateRoutes = require("./routes/suggestionUpdate");

const app = express();

app.use(express.json());

//routes

app.use("/saveArticle", saveRoutes);
app.use("/commentArticle", commentRoutes);
app.use("/suggestionArticle", SuggestionUpdateRoutes);

app.get("/", (req, res) => {
  res.json({ msg: "Hello, World!" });
});

app.listen(7856, () => {
  console.log("Server is running on port 7856");
  dbconnection();
});
