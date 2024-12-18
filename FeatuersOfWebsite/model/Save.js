const { default: mongoose } = require("mongoose");

const saveScehma = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    articleId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Article",
    },
  },
  {
    timestamps: true,
  }
);

const Save = mongoose.model("Save", saveScehma);

module.exports = Save;