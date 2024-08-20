const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3118;

app.use(express.json());

app.get("/file/", (req, res) => {
  const { filename } = req.body;

  if (!filename) {
    return res.status(400).send({ error: "Filename is required." });
  }

  let data = fs.readFileSync(filename, "utf8", (err) => {
    return res
      .status(500)
      .send({ error: "Error reading file or file does not exist." });
  });
  res.send({ content: data });
});

app.post("/file/", (req, res) => {
  const { filename, content } = req.body;

  if (!filename || !content) {
    return res
      .status(400)
      .send({ error: "Filename and content are required." });
  }

  fs.appendFileSync(filename, content, (err) => {
    return res
      .status(500)
      .send({ error: "Error creating or appending to file." });
  });
  res.send({ message: `File ${filename} created or updated successfully.` });
});

app.put("/file/", (req, res) => {
  const { oldFilename, newFilename } = req.body;

  if (!oldFilename || !newFilename) {
    return res
      .status(400)
      .send({ error: "Old and new filenames are required." });
  }

  fs.renameSync(oldFilename, newFilename, (err) => {
    return res
      .status(500)
      .send({ error: "Error renaming file or file does not exist." });
  });
  res.send({
    message: `File renamed from '${oldFilename}' to '${newFilename}'.`,
  });
});

app.delete("/file/", (req, res) => {
  const { filename } = req.body;

  if (!filename) {
    return res.status(400).send({ error: "Filename is required." });
  }

  fs.unlinkSync(filename, (err) => {
    return res
      .status(500)
      .send({ error: "Error deleting file or file does not exist." });
  });
  res.send({ message: `File ${filename} deleted successfully.` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
