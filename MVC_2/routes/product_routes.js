const { Router } = require("express");
const {
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product_request");
const isValid = require("../middlewares/isValidate");
const PRoute = Router();

PRoute.get("/", getProduct);
PRoute.post("/", isValid, createProduct);
PRoute.patch("/:id", updateProduct);
PRoute.delete("/:id", deleteProduct);

module.exports = { PRoute };
