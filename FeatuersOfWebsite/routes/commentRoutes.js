const {
  getComment,
  createComment,
  updateComment,
  deleteComment,
} = require("../controller/commentController");

const commentRoutes = require("express").Router();

commentRoutes.route("/").get(getComment).post(createComment);

commentRoutes.route("/:id").patch(updateComment).delete(deleteComment);

module.exports = commentRoutes;
