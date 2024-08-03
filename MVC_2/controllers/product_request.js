const Product = require("../models/products_schema");

const getProduct = async (req, res) => {
  const data = await Product.find();
  res.send(data);
};

const createProduct = async (req, res) => {
  const data = await Product.create(req.body);
  res.send(data);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.send(`Product with id ${id} deleted successfully.`);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.send(updatedProduct);
};

module.exports = { getProduct, createProduct, updateProduct, deleteProduct };
