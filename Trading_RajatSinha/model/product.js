const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  organ: {
    type: String,
    required: true,
    enum: ["kidney", "liver", "heart", "cornea", "bone_marrow"],
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  seller: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
