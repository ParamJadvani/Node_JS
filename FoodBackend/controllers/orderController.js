const Order = require("../models/Order");
const User = require("../models/User");
const Food = require("../models/Food");
const Restaurant = require("../models/Restaurant");

// **Create Order**
const createOrder = async (req, res) => {
  try {
    const { foodItems, restaurantId } = req.body;
    const userId = req.user._id; // Assuming you're passing the logged-in user's ID in the request

    // Validate if all food items exist in the restaurant
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    const foods = await Food.find({
      _id: { $in: foodItems.map((item) => item.foodId) },
    });
    if (foods.length !== foodItems.length) {
      return res.status(400).json({ message: "Some food items are invalid" });
    }

    // Calculate total amount
    const totalAmount = foodItems.reduce((total, item) => {
      const food = foods.find(
        (f) => f._id.toString() === item.foodId.toString()
      );
      return total + food.price * item.quantity;
    }, 0);

    const newOrder = new Order({
      userId,
      restaurantId,
      foodItems,
      totalAmount,
    });

    await newOrder.save();

    res.status(201).json({
      message: "Order created successfully",
      data: newOrder,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create order", error: error.message });
  }
};

// **Get All Orders**
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId", "name email")
      .populate("restaurantId", "name location")
      .populate("foodItems.foodId", "name price");

    res.status(200).json({ data: orders });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch orders", error: error.message });
  }
};

// **Get Orders by User**
const getOrdersByUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const orders = await Order.find({ userId })
      .populate("restaurantId", "name location")
      .populate("foodItems.foodId", "name price");

    if (!orders.length) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    res.status(200).json({ data: orders });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch orders", error: error.message });
  }
};

// **Update Order**
const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status || !["pending", "completed"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    )
      .populate("userId", "name email")
      .populate("restaurantId", "name location")
      .populate("foodItems.foodId", "name price");

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({
      message: "Order updated successfully",
      data: updatedOrder,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update order", error: error.message });
  }
};

// **Delete Order**
const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedOrder = await Order.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({
      message: "Order deleted successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete order", error: error.message });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrdersByUser,
  updateOrder,
  deleteOrder,
};
