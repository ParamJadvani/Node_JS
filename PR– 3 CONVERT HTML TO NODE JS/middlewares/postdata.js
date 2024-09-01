module.exports.checkPostData = (req, res, next) => {
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
  if (missingFields.length) {
    return res.status(400).json({ message: "All fields are required" });
  }
  next();
};
