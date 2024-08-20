const express = require("express");
const app = express();
const PORT = 3118;

app.use(express.json());

const validateNumbers = (numbers) => {
  return (
    Array.isArray(numbers) && numbers.forEach((num) => typeof num === "number")
  );
};

app.post("/calculator/add", (req, res) => {
  const { numbers } = req.body;
  if (!validateNumbers(numbers)) {
    return res
      .status(400)
      .send({ error: "Invalid input. Please provide an array of numbers." });
  }

  const result = 0;
  numbers.forEach((num) => (result += num));
  res.send({ result });
});

app.post("/calculator/subtract", (req, res) => {
  const { numbers } = req.body;

  if (!validateNumbers(numbers)) {
    return res
      .status(400)
      .send({ error: "Invalid input. Please provide an array of numbers." });
  }

  const result = 0;
  numbers.forEach((num) => (result -= num));
  res.send({ result });
});

app.post("/calculator/multiply", (req, res) => {
  const { numbers } = req.body;

  if (!validateNumbers(numbers)) {
    return res
      .status(400)
      .send({ error: "Invalid input. Please provide an array of numbers." });
  }

  const result = 1;
  numbers.forEach((num) => (result *= num));
  res.send({ result });
});

app.post("/calculator/divide", (req, res) => {
  const { numbers } = req.body;

  if (!validateNumbers(numbers)) {
    return res
      .status(400)
      .send({ error: "Invalid input. Please provide an array of numbers." });
  }

const result = 

  res.send({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
