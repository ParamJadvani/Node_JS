const checkData = (req, res, next) => {
  const requiredFields = [
    "title",
    "author",
    "category",
    "publicationYear",
    "price",
    "quantity",
    "description",
    "imageUrl",
  ];

  const missingFields = requiredFields.filter(
    (field) => !(field in req.body) || req.body[field] === ""
  );

  if (missingFields.length > 0) {
    return res.status(400).json({ message: "All fields are required" });
  }

  next();
};

module.exports = checkData;
