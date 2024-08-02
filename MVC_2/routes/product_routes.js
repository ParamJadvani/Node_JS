const { Router } = require("express");
const { getProduct, createProduct } = require("../controllers/product_request");
const isValid = require("../middlewares/isValidate");
const PRoute = Router();

PRoute.get("/", getProduct);
PRoute.post("/", isValid, createProduct);

module.exports = { PRoute };
