const Product = require("../model/product");
const User = require("../model/user_model");

const addProductPage = (req, res) => {
  res.render("addProduct", { message: "" });
};

const addProduct = async (req, res) => {
  const { organ, price, description } = req.body;
  const sellerId = req.cookies.token;

  const seller = await User.findById(sellerId);
  if (!seller) {
    return res.redirect("/add", { message: "Seller not found" });
  }

  const newProduct = new Product({
    organ,
    price,
    description,
    seller: sellerId,
  });

  await newProduct.save();
  const product = await Product.find();
  res.cookie("product", product).redirect("/");
};

module.exports = { addProductPage, addProduct };
