const path = require("path");
const initialRecipe = require("./recipes_DB");

module.exports.globalRoute = (req, res) => {
  res.send("Welcome to the Recipe API!");
};

module.exports.openIndexFile = (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"));

module.exports.openRecipeFile = (req, res) =>
  res.sendFile(path.join(__dirname, "../public/recipe.html"));

module.exports.getRecipe = (req, res) => res.send(initialRecipe);

module.exports.filterData = (req, res) => {
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
};

module.exports.createRecipe = (req, res) => {
  const newRecipe = {
    ...req.body,
    id: initialRecipe.length
      ? initialRecipe[initialRecipe.length - 1].id + 1
      : 1,
  };
  initialRecipe.push(newRecipe);
  res.send(newRecipe);
};

module.exports.updateRecipe = (req, res) => {
  const { id } = req.params;
  const recipeIndex = initialRecipe.findIndex(
    (recipe) => recipe.id === parseInt(id)
  );

  if (recipeIndex === -1) return res.status(404).send("Recipe not found");

  initialRecipe[recipeIndex] = { ...initialRecipe[recipeIndex], ...req.body };
  res.json(initialRecipe);
};

module.exports.deleteRecipe = (req, res) => {
  const { id } = req.params;
  const recipeIndex = initialRecipe.findIndex((e) => e.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).send("Recipe not found");

  initialRecipe.splice(recipeIndex, 1);
  res.json(initialRecipe);
};
