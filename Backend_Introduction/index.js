const express = require("express");
const app = express();
const port = 8113;
const db = [];

// Middleware to parse JSON request bodies
app.use(express.json()); // This middleware parses incoming JSON requests and puts the parsed data in req.body

// Get Method { Get the data from the database }
app.get("/", (req, res) => {
  res.send(db);
});

// Post Method { Set the data into the database }
app.post("/", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age)
    return res.status(400).json({ error: "Name and age are required." });

  const user = { id: db.length + 1, name, age };
  db.push(user);

  res.status(201).json(user);
});

// Delete Method { Delete the data from the database }
app.delete("/:id", (req, res) => {
  const { id } = req.params;

  const index = db.findIndex((user) => user.id === parseInt(id));

  if (index === -1) return res.status(404).json({ error: "User not found." });

  const deletedUser = db.splice(index, 1)[0];

  res.status(200).json(deletedUser);
});

// Start the server
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
