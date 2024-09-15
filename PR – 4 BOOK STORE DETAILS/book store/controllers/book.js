const { get } = require("mongoose");
const BookModel = require("../model/book_model");
const multer = require("multer");

const getAllBook = async (req, res) => res.send(await BookModel.find());

const getBookById = async (req, res) =>
  res.send(await BookModel.findById(req.params.id));

const filterBook = async (req, res) => {
  const { title, author, category, price } = req.query;
  const query = {};

  console.log(req.query);

  if (title) query.title = title;
  if (author) query.author = author;
  if (category) query.category = category;

  let booksQuery = BookModel.find(query);

  if (price === "lth") booksQuery = booksQuery.sort({ price: 1 });
  else if (price === "htl") booksQuery = booksQuery.sort({ price: -1 });

  res.send(await booksQuery);
};

const createBook = async (req, res) => {
  let imageUrl;
  if (req.files) imageUrl = req.file.path;
  console.log(req.files);

  const {
    title,
    author,
    category,
    publicationYear,
    price,
    quantity,
    description,
  } = req.body;

  const book = {
    title,
    author,
    category,
    publicationYear,
    price,
    quantity,
    description,
    imageUrl,
  };

  res.send(await BookModel.create(book));
};

const updateBook = async (req, res) =>
  res.send(
    await BookModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );

const deleteBook = async (req, res) =>
  res.send(await BookModel.findByIdAndDelete(req.params.id));

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

module.exports = {
  getAllBook,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  upload,
  filterBook,
};
