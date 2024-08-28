const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const img = document.getElementById("img").value;
  const description = document.getElementById("description").value;

  const newItem = {
    title,
    img,
    description,
  };

  await fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  });
  form.reset();
});
