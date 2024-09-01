const getData = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const preparationTime = document.getElementById("preparationTime").value;
  const cookingTime = document.getElementById("cookingTime").value;
  const imageUrl = document.getElementById("imageUrl").value;
  const country = document.getElementById("country").value;
  const veg = document.getElementById("veg").checked;

  const recipe = {
    name,
    description,
    preparationTime,
    cookingTime,
    imageUrl,
    country,
    veg,
  };

  addDataToDB(recipe);
};

const addDataToDB = async (data) => {
  const res = await fetch("http://localhost:8090/recipe/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    alert("Recipe added successfully");
    window.location.href = "index.html";
  } else alert("Failed to add recipe");
};

document.getElementById("recipe-form").addEventListener("submit", getData);
