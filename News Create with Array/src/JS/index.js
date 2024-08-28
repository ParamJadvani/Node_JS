const cardsContainer = document.getElementById("cards-container");

let data = [];

const displayData = (data) => {
  cardsContainer.innerHTML = "";
  data?.map((cardData, index) => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";

    const img = document.createElement("img");
    img.src = cardData.img;

    const content = document.createElement("div");
    content.className = "content";

    const title = document.createElement("h2");
    title.innerHTML = cardData.title;

    const description = document.createElement("p");
    description.innerHTML = cardData.description;

    const deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", () => deleteData(index));
    deleteButton.className = "delete-button";
    deleteButton.innerHTML = "Delete";

    cardElement.append(img, title, content, deleteButton);
    cardsContainer.append(cardElement);
  });
};

const deleteData = async (index) => {
  console.log(true, index);

  await fetch(`http://localhost:3000/${index + 1}`, {
    method: "DELETE",
  });
  await getdataFromDB();
};

const getdataFromDB = async () => {
  let req = await fetch("http://localhost:3000/");
  data = [];
  data = await req.json();
  displayData(data);
};
getdataFromDB();
