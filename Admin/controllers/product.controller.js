const Product = require("../models/product.schema");
const User = require("../models/user.schema");
const dotenv = require("dotenv").config();

const approve = async (req, res) => {
  const { name, price, category, userId } = req.params;

  const newProduct = new Product({ name, price, category, userId });
  await newProduct.save();
  res.status(201).send("Product created and stored in database");
};

const reject = (req, res) => {
  res.status(200).send("Product creation request rejected");
};

const createProduct = async (req, res) => {
  const { name, price, category } = req.body;
  const userId = req.cookies.userId;

  if (!userId) return res.status(400).send("User not logged in");

  const user = await User.findById(userId);
  if (!user) return res.status(404).send("User not found");

  const adminEmail = process.env.Admin_Email;

  const approveUrl = `http://localhost:8090/products/approve?name=${name}&price=${price}&category=${category}&userId=${userId}`;
  const rejectUrl = `http://localhost:8090/products/reject`;

  const emailContent = `
    <h2>Product Approval Request</h2>
    <p>Product Name: ${name}</p>
    <p>Price: ${price}</p>
    <p>Category: ${category}</p>
    <p>User ID: ${userId}</p>
    <a href="${approveUrl}" style="padding: 10px; background-color: green; color: white; text-decoration: none;">Approve</a>
    <a href="${rejectUrl}" style="padding: 10px; background-color: red; color: white; text-decoration: none; margin-left: 10px;">Reject</a>
  `;

  await sendMail(adminEmail, "Product Approval Request", emailContent);

  res.status(200).send("Product creation request sent to admin for approval");
};

module.exports = { approve, createProduct, reject };
