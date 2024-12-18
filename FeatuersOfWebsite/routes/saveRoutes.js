const {
  getSavedArticle,
  addSavedArticle,
  removeSavedArticle,
} = require("../controller/saveController");

const saveRoutes = require("express").Router();

saveRoutes
  .route("/")
  .get(getSavedArticle)
  .post(addSavedArticle)
  .delete(removeSavedArticle);

module.exports = saveRoutes;
