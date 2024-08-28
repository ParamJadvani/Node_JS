const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

let dataBase = [];

app.get("/", (req, res) => {
  res.send(dataBase);
});

app.post("/", (req, res) => {
  const newItem = req.body;
  newItem.id = dataBase.length + 1;

  if (newItem) {
    dataBase.push(newItem);
  } else {
    res.status(400).send({ message: "Date not found" });
  }
  res.send(dataBase);
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = dataBase.filter((item) =>
    item.id !== parseInt(id) ? item : null
  );
  dataBase = index;
  res.send(dataBase);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
