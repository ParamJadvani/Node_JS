const { Router } = require("express");
const {
  getData,
  createBlogData,
  getDatabyId,
} = require("../controllers/blog_data");
const blogRouter = Router();

blogRouter.get("/", getData);
blogRouter.get("/:id", getDatabyId);
blogRouter.post("/", createBlogData);

module.exports = blogRouter;
