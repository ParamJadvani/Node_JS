const commentRoutes = require("express").Router();

commentRoutes
  .route("/")
  .get(async (req, res) => {
    try {
      const comments = await Comment.find({});
      res.json(comments);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  })
  .post(async (req, res) => {
    const comment = new Comment(req.body);
    try {
      const newComment = await comment.save();
      res.status(201).json(newComment);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  })
  .patch(async (req, res) => {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!comment) return res.status(404).json({ message: "Comment not found" });
    res.json(comment);
  })
  .delete(async (req, res) => {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) return res.status(404).json({ message: "Comment not found" });
    res.json({ message: "Comment deleted" });
  });

module.exports = commentRoutes;
