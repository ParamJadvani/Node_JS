const express = require("express");
const path = require("path");
const PORT = 8090;
const app = express();

const { checkPostData } = require("./middlewares/postdata");
const initialRecipe = require("./recipe/recipes_DB");
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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.send("Welcome to the Recipe API!"));

app.get("/index", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);
console.log(path.join(__dirname, "public/index.html"));


app.get("/add", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/recipe.html"))
);

app.get("/recipe/all", (req, res) => res.send(initialRecipe));

app.get("/recipe/filter", (req, res) => {
  const { veg, sort, country } = req.query;
  let filteredRecipes = initialRecipe;

  if (veg)
    filteredRecipes = filteredRecipes.filter((e) => e.veg === (veg === "true"));

  if (country)
    filteredRecipes = filteredRecipes.filter(
      (e) => e.country.toLowerCase() === country.toLowerCase()
    );

  if (sort) {
    if (sort === "htl")
      filteredRecipes = filteredRecipes.sort(
        (a, b) => b.cookingTime - a.cookingTime
      );
    else if (sort === "lth")
      filteredRecipes = filteredRecipes.sort(
        (a, b) => a.cookingTime - b.cookingTime
      );
  }

  res.json(filteredRecipes);
});

app.post("/recipe/add", checkPostData, (req, res) => {
  const newRecipe = {
    ...req.body,
    id: initialRecipe.length
      ? initialRecipe[initialRecipe.length - 1].id + 1
      : 1,
  };
  initialRecipe.push(newRecipe);
  res.send(newRecipe);
});

app.patch("/recipe/update/:id", (req, res) => {
  const { id } = req.params;
  const recipeIndex = initialRecipe.findIndex(
    (recipe) => recipe.id === parseInt(id)
  );

  if (recipeIndex === -1) return res.status(404).send("Recipe not found");

  initialRecipe[recipeIndex] = { ...initialRecipe[recipeIndex], ...req.body };
  res.json(initialRecipe);
});

app.delete("/recipe/delete/:id", (req, res) => {
  const { id } = req.params;
  const recipeIndex = initialRecipe.findIndex((e) => e.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).send("Recipe not found");

  initialRecipe.splice(recipeIndex, 1);
  res.json(initialRecipe);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
