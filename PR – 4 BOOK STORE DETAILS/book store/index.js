const DBConnection = require("./config/DB");
const book = require("./routes/book_routes");

const app = require("express")();
const path = require("path");
const dotenv = require("dotenv").config();

app.use(require("express").json());
app.use(require("express").urlencoded({ extended: true }));
app.use(require("express").static(path.join(__dirname, "uploads")));
app.use(require("cors")());
app.use("/books", book);

app.get("/", (req, res) => res.send("welcome to the book store"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  DBConnection();
});
