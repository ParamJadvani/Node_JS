const express = require("express");
const Product = require("../models/product.schema");
const {
  approve,
  createProduct,
  reject,
} = require("../controllers/product.controller");
const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Product.find();
  res.send(data);
});

router.post("/create", createProduct);

router.post("/approve", approve);
router.post("/reject", reject);

router.get("/create", (req, res) => {
  res.render("createProduct");
});

module.exports = router;
