const multer = require("multer");
const path = require("path");

// Configure storage
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Multer config
const upload = multer({
  storage: storage,
});

module.exports = upload;
