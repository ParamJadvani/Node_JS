const isValid = (req, res, next) => {
  let { username, email, password } = req.params;
  if (username && email && password) {
    next();
  } else {
    return res.status(400).json({ error: "Name and Age are required." });
  }
};

module.exports = isValid;
