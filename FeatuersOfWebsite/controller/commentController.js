const Comment = require("../model/Comment");

const getComment = async (req, res) => {
  try {
    const userId = req.user;
    const comments = await Comment.find({
      user: userId,
    });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createComment = async (req, res) => {
  try {
    const userId = req.user;
    const comment = await Comment.create({
      user: userId,
      text: req.body.comment,
      article: req.body.article,
    });
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateComment = async (req, res) => {
  const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!comment) return res.status(404).json({ message: "Comment not found" });
  res.json(comment);
};

const deleteComment = async (req, res) => {
  const comment = await Comment.findByIdAndDelete(req.params.id);
  if (!comment) return res.status(404).json({ message: "Comment not found" });
  res.json({ message: "Comment deleted" });
};

module.exports = {
  getComment,
  createComment,
  updateComment,
  deleteComment,
};
