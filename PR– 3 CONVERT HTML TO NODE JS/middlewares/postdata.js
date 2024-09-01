module.exports.checkPostData = (req, res, next) => {
  console.log(req.body);

  const requiredFields = [
    "name",
    "description",
    "preparationTime",
    "cookingTime",
    "imageUrl",
    "country",
    "veg",
  ];

  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (missingFields.length > 0) {
    return res.status(400).json({ message: "All fields are required" });
  }
  next();
};
