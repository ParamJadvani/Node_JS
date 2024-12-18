const {
  addSuggestion,
  getSuggestion,
  updatedSuggestion,
  removeSuggestion,
} = require("../controller/SuggestionUpdateController");

const SuggestionUpdateRoutes = require("express").Router();

SuggestionUpdateRoutes.post("/", addSuggestion);

SuggestionUpdateRoutes.route("/:id")
  .get(getSuggestion)
  .patch(updatedSuggestion)
  .delete(removeSuggestion);

module.exports = SuggestionUpdateRoutes;
