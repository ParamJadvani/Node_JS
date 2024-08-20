const express = require("express");
const cowsay = require("cowsay");
const app = express();
const PORT = 3118;
app.use(express.json());

app.get("/cowsay", (req, res) => {
  console.log(
    cowsay.say({
      text: "I'm a moooodule",
      e: "oO",
      T: "U ",
    })
  );

  res.send({ message: "Thank for using cowsay!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
