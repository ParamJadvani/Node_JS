const Restaurant = require("../models/Restaurant");

const addRestaurant = async (req, res) => {
  try {
    const { name, location } = req.body;
    const { createdBy } = req.user;

    const newRestaurant = await Restaurant.create({
      name,
      location,
      createdBy,
    });

    res.status(201).json({
      message: "Restaurant created successfully",
      data: newRestaurant,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create restaurant", error: error.message });
  }
};

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().populate(
      "createdBy admins",
      "name email"
    );

    res.status(200).json({ data: restaurants });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch restaurants", error: error.message });
  }
};

const assignAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { adminId } = req.body;

    const adminUser = await User.findById(adminId);
    if (!adminUser) {
      return res.status(404).json({ message: "Admin user not found" });
    }

    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      id,
      { $addToSet: { admins: adminId } },
      { new: true }
    ).populate("admins", "name email");

    if (!updatedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.status(200).json({
      message: "Admin assigned successfully",
      data: updatedRestaurant,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to assign admin", error: error.message });
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRestaurant = await Restaurant.findByIdAndDelete(id);

    if (!deletedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.status(200).json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete restaurant", error: error.message });
  }
};

const updateRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location } = req.body;

    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      id,
      { name, location },
      { new: true }
    );

    if (!updatedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.status(200).json({
      message: "Restaurant updated successfully",
      data: updatedRestaurant,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update restaurant",
      error: error.message,
    });
  }
};

module.exports = {
  addRestaurant,
  getAllRestaurants,
  assignAdmin,
  deleteRestaurant,
  updateRestaurant,
};
