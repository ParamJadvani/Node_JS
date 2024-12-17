const isSuperAdmin = async (req, res, next) => {
  const user = req.user;

  if (!user || user.role !== "superadmin") {
    return res.status(403).json({ message: "Access denied. Superadmin only." });
  }

  next();
};

const isAdmin = async (req, res, next) => {
  const user = req.user;

  if (!user || user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admin only." });
  }

  next();
};

const verifyRestaurantAccess = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = req.user;

    const restaurant = await Restaurant.findById(id);

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    if (restaurant.admins.includes(user._id)) {
      return next();
    }

    return res
      .status(403)
      .json({ message: "Access denied. Unauthorized user." });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to verify restaurant access",
      error: error.message,
    });
  }

  next();
};

module.exports = { isSuperAdmin, isAdmin, verifyRestaurantAccess };
