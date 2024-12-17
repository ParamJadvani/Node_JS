const express = require("express");
const {
  createOrder,
  getAllOrders,
  getOrdersByUser,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

const orderRouter = express.Router();

// User Routes
orderRouter.post("/", createOrder); // Create new order
orderRouter.get("/:userId", getOrdersByUser); // Get orders by user ID

// Admin Routes (for managing orders)
orderRouter.get("/", getAllOrders); // Get all orders
orderRouter.patch("/:id", updateOrder); // Update order status
orderRouter.delete("/:id", deleteOrder); // Delete an order

module.exports = orderRouter;
