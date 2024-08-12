import { createBlogPost } from "../../components/blog_api.js";

let id = document.cookie;
let userId = id.split("=")[1];
if (!userId) {
  alert("Please Login First");
  window.location.href = "login.html";
}

document.getElementById("blog").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(document.getElementById("author"));

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let content = document.getElementById("content").value;
  let date = new Date();
  console.log(date);
  let blog = {
    title,
    content,
    author,
    date,
    userId,
  };
  createBlogPost(blog);
  document.getElementById("blog").reset();
});
