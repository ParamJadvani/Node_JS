const check_Post_Data = (req, res, next) => {
  const { username, email, password, age, address } = req.body;

  if (!username || !email || !password || !age || !address) {
    return res.status(400).send({ error: "All fields are required." });
  }

  next();
};

module.exports = check_Post_Data;
