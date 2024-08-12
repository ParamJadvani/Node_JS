import { getBlogPost } from "../../components/blog_api.js";

let id = document.cookie;
let userId = id.split("=")[1];
if (!userId) {
  alert("Please Login First");
  window.location.href = "login.html";
}

const getData = async () => {
  const res = await getBlogPost(userId);
  console.log(res);

  let blogPosts = res;
  blogPosts.forEach((post) => {
    let blog = document.createElement("div");
    blog.classList.add("blog-post");
    blog.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
      `;
    document.getElementById("blog-posts").appendChild(blog);
  });
};

getData();
