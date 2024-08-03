const isValid = (req, res, next) => {
  let { name, price, quantity, description } = req.body;
  if (name && price && quantity && description) next();
  else return res.status(401).json({ error: "All Items are required to fill" });
};

module.exports = isValid;
