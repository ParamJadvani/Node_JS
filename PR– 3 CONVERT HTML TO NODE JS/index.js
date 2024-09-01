const express = require("express");
const path = require("path");
const PORT = 8090;
const app = express();

const { checkPostData } = require("./middlewares/postdata");
const {
  globalRoute,
  openIndexFile,
  openRecipeFile,
  getRecipe,
  filterData,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("./recipe/routes");

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Route to respond with a welcome message at the root ("/")
app.get("/", globalRoute);

// Route to serve the index.html file at "/index"
app.get("/index", openIndexFile);

// Serve the recipe.html file for adding new recipes at "/add"
app.get("/add", openRecipeFile);

// API routes
app.get("/recipe/all", getRecipe);
app.get("/recipe/filter", filterData);

app.post("/recipe/add", checkPostData, createRecipe);

app.patch("/recipe/update/:id", updateRecipe);

app.delete("/recipe/delete/:id", deleteRecipe);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
