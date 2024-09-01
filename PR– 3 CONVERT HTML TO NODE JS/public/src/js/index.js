const parent = document.getElementById("parent");

const getDataFromDB = async () => {
  const req = await fetch("http://localhost:8090/recipe/all");
  const data = await req.json();
  renderUI(data);
};

const renderUI = (data) => {
  parent.innerHTML = "";

  data?.forEach((elem) => createProduct(elem));
};

const createProduct = (data) => {
  const card = document.createElement("div");
  card.className = "recipe-card";

  const image = document.createElement("img");
  image.src = data.image;
  image.alt = data.name;

  const recipeInfo = document.createElement("div");
  recipeInfo.className = "recipe-info";

  const name = document.createElement("h2");
  const description = document.createElement("p");
  const cookTime = document.createElement("p");
  const prepTime = document.createElement("p");
  const isVeg = document.createElement("p");
  const country = document.createElement("p");

  name.innerHTML = data.name;
  description.innerHTML = data.description;
  cookTime.innerHTML = `Cooking Time: ${data.cookTime} minutes`;
  prepTime.innerHTML = `Preperation Time: ${data.prepTime} minutes`;
  isVeg.innerHTML = `Veg: ${data.veg ? "Yes" : "No"}`;
  country.innerHTML = `Country: ${data.country}`;

  recipeInfo.append(name, description, cookTime, prepTime, isVeg, country);
  card.append(image, recipeInfo);

  parent.appendChild(card);
};

document.getElementById("add").addEventListener("click", () => {
  window.location.href = "recipe.html";
});

getDataFromDB();
