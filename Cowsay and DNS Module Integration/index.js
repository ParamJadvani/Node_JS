const express = require("express");
const cowsay = require("cowsay");
const dns = require("node:dns");
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


app.get("/resolve", (req, res) => {
  const domain = req.query.domain;

  if (!domain) {
    return res.status(400).json({ error: "Domain name is required" });
  }

  dns.lookup(domain, (err, address, family) => {
    if (err) {
      return res.status(500).json({ error: "Failed to resolve domain" });
    }
    res.json({ domain, address, family });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
