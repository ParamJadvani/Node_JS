module.exports.checkPostData = (req, res, next) => {
  console.log(req.body);

  const requiredFields = ["name", "category", "instructor", "duration"];

  const missingFields = requiredFields.filter((field) => {
    !req.body[field];
    console.log(!req.body[field], req.body[field]);
  });
  console.log(missingFields.length > 0);

  if (missingFields.length > 0) {
    return res.status(400).json({ message: "All fields are required" });
  }
  next();
};
