const express = require("express");
const {
  getAllRestaurants,
  addRestaurant,
  updateRestaurant,
  assignAdmin,
  deleteRestaurant,
} = require("../controllers/restaurantController");

const restaurantRouter = express.Router();

restaurantRouter.get("/", getAllRestaurants);
restaurantRouter.post("/", addRestaurant);
restaurantRouter.patch("/:id", updateRestaurant);
restaurantRouter.post("/:id/assign-admin", assignAdmin);
restaurantRouter.delete("/:id", deleteRestaurant);

module.exports = restaurantRouter;
