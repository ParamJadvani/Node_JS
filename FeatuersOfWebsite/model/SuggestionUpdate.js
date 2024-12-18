const { default: mongoose } = require("mongoose");

const suggestionUpdateModel = new mongoose.Schema(
  {
    content: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const SuggestionUpdate = mongoose.model(
  "SuggestionUpdate",
  suggestionUpdateModel
);

module.exports = SuggestionUpdate;
