const express = require("express");
const connectDB = require("./config/db");
const { PRoute } = require("./routes/product_routes");
const app = express();
app.use(express.json());
const port = 3118;

app.use("/product", PRoute);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
  connectDB();
});
