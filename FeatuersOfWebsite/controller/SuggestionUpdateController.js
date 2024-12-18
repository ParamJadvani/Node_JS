const SuggestionUpdate = require("../model/SuggestionUpdate");

const getSuggestion = async (req, res) => {
  try {
    const articles = await SuggestionUpdate.find({ article: req.params.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addSuggestion = async (req, res) => {
  try {
    const userId = req.user;
    const newSuggestion = await SuggestionUpdate.create({
      article: req.body.id,
      user: userId,
      suggestion: req.body.suggestion,
    });
    res.status(201).json(newSuggestion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatedSuggestion = async (req, res) => {
  try {
    const updatedSuggestion = await SuggestionUpdate.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedSuggestion)
      return res.status(404).json({ message: "Suggestion not found" });
    res.json(updatedSuggestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeSuggestion = async (req, res) => {
  try {
    const deletedSuggestion = await SuggestionUpdate.findByIdAndDelete(
      req.params.id
    );
    if (!deletedSuggestion)
      return res.status(404).json({ message: "Suggestion not found" });
    res.json(deletedSuggestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getSuggestion,
  addSuggestion,
  updatedSuggestion,
  removeSuggestion,
};
