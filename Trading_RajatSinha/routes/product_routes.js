const express = require("express");
const auth = require("../middlewares/auth");
const {
  addProductPage,
  addProduct,
} = require("../controllers/product_controller");
const router = express.Router();

router.get("/add", auth, addProductPage);

router.post("/add", addProduct);

module.exports = router;
