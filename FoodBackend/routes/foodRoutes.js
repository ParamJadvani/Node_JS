const foodRouter = require("express").Router();
const {
  addFood,
  getAllFoods,
  updateFood,
  deleteFood,
} = require("../controllers/foodController");
const { verifyRestaurantAccess } = require("../middleware/authMiddleware");

foodRouter.post("/:restaurantId", verifyRestaurantAccess, addFood);

foodRouter.get("/:restaurantId", verifyRestaurantAccess, getAllFoods);

foodRouter.put("/:id", updateFood);

foodRouter.delete("/:id", deleteFood);

module.exports = foodRouter;
