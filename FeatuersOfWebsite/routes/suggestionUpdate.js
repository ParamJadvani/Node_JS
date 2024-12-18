const SuggestionUpdateRoutes = require("express").Router();

SuggestionUpdateRoutes.route("/")
  .get(async (req, res) => {
    try {
      const suggestions = await Suggestion.find();
      res.json(suggestions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const newSuggestion = new Suggestion(req.body);
      await newSuggestion.save();
      res.status(201).json(newSuggestion);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  })
  .patch(async (req, res) => {
    try {
      const updatedSuggestion = await Suggestion.findByIdAndUpdate(
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
  })
  .delete(async (req, res) => {
    try {
      const deletedSuggestion = await Suggestion.findByIdAndDelete(
        req.params.id
      );
      if (!deletedSuggestion)
        return res.status(404).json({ message: "Suggestion not found" });
      res.json(deletedSuggestion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = SuggestionUpdateRoutes;
