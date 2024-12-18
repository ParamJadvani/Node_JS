const Save = require("../model/Save");

const getSavedArticle = async (req, res) => {
  try {
    const userId = req.user;
    const savedArticle = await Save.findById(userId);
    res.json(savedArticle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addSavedArticle = async (req, res) => {
  try {
    const userId = req.user;
    const savedArticle = await Save.findById(userId);

    if (savedArticle) {
      return res.status(402).json({ msg: "alreay saved" });
    }

    const newSave = await Save.create({
      user: userId,
      articleId: req.body,
    });

    res.send(newSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const removeSavedArticle = async (req, res) => {
  try {
    const savedArticle = await Save.findByIdAndDelete(req.params.id);

    res.send(savedArticle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSavedArticle,
  addSavedArticle,
  removeSavedArticle,
};
