const Food = require("../models/Food");

// Add Food
const addFood = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const { id } = req.params;

    const food = await Food.create({
      name,
      price,
      description,
      restaurantId: id,
      createdBy: req.user._id,
    });

    res.status(201).json({ message: "Food item added successfully", food });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding food", error: error.message });
  }
};

// Get All Foods for a Restaurant
const getAllFoods = async (req, res) => {
  try {
    const { id } = req.params;

    const foods = await Food.find({ restaurantId: id });
    res.status(200).json({ message: "Foods retrieved successfully", foods });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving foods", error: error.message });
  }
};

// Update Food
const updateFood = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description } = req.body;

    const updatedFood = await Food.findByIdAndUpdate(
      id,
      { name, price, description },
      { new: true }
    );

    if (!updatedFood) {
      return res.status(404).json({ message: "Food item not found" });
    }

    res.status(200).json({ message: "Food updated successfully", updatedFood });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating food", error: error.message });
  }
};

// Delete Food
const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedFood = await Food.findByIdAndDelete(id);

    if (!deletedFood) {
      return res.status(404).json({ message: "Food item not found" });
    }

    res.status(200).json({ message: "Food deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting food", error: error.message });
  }
};

module.exports = { addFood, getAllFoods, updateFood, deleteFood };
