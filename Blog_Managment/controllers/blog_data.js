const BlogPost = require("../model/blog_schema");

const getDatabyId = async (req, res) => {
  const { id } = req.params;
  const data = await BlogPost.find({ userId: id });
  res.send(data);
};

const getData = async (req, res) => {
  const data = await BlogPost.find();
  res.send(data);
};

const createBlogData = async (req, res) => {
  const data = await BlogPost.create(req.body);
  res.status(201).send(data);
};

module.exports = { getData, createBlogData, getDatabyId };
