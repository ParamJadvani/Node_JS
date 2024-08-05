const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Pending", "Completed", "In Progress"],
    default: "Pending",
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
