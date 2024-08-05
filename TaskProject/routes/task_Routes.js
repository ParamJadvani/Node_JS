const { Router } = require("express");
const {
  getTaskData,
  createTaskData,
  updateTaskData,
  deleteTaskData,
  findById,
} = require("../controllers/task_Routes_Logic");
const TaskRouter = Router();

TaskRouter.get("/", getTaskData);
TaskRouter.get("/:id", findById);

TaskRouter.post("/", createTaskData);
TaskRouter.patch("/:id", updateTaskData);
TaskRouter.delete("/:id", deleteTaskData);

module.exports = { TaskRouter };
