const { isSuperAdmin, isAdmin } = require("../middleware/authMiddleware");
const { verifyToken } = require("../middleware/jwtVerify");
const userRouter = require("./authRoutes");
const foodRouter = require("./foodRoutes");
const orderRouter = require("./orderRoutes");
const restaurantRouter = require("./restaurantRoutes");

const apiRouter = require("express").Router();

apiRouter.use("/auth", userRouter);
apiRouter.use("/restaurants", verifyToken, isSuperAdmin, restaurantRouter);
apiRouter.use("/foods", verifyToken, isAdmin, foodRouter);
apiRouter.use("/order", verifyToken, orderRouter);

module.exports = apiRouter;
