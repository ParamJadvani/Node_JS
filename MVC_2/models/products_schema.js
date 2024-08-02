const mongoose = require("mongoose");

const productScehma = mongoose.Schema({
  name: { required: true, type: String },
  price: { required: true, type: Number },
  quantity: { required: true, type: Number },
  description: { required: true, type: String },
});

const Product = mongoose.model("Product", productScehma);

module.exports = Product;
