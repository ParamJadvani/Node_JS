const {
  getAllBook,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  upload,
  filterBook,
} = require("../controllers/book");
const checkData = require("../middlewares/book");

const book = require("express").Router();

book.get("/", getAllBook);
book.get("/book/:id", getBookById);
book.get("/filter",filterBook);

book.post("/addbooks", checkData, upload.single("image"), createBook);

book.patch("/update/:id", updateBook);

book.delete("/delete/:id", deleteBook);

module.exports = book;
