const Product = require("../models/products_schema");

const getProduct = async (req, res) => {
  const data = await Product.find();
  res.send(data);
};

const createProduct = async (req, res) => {
  const data = await Product.create(req.body);
  res.send(data);
};

module.exports = { getProduct, createProduct };
