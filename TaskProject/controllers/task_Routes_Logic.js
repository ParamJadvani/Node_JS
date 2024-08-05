const Task = require("../model/task_Schema");

const getTaskData = async (req, res) => {
  const data = await Task.find();
  res.send(data);
};

const createTaskData = async (req, res) => {
  const data = await Task.create(req.body);
  res.send(data);
};

const updateTaskData = async (req, res) => {
  const { id } = req.params;
  const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
  res.send(updatedTask);
};

const deleteTaskData = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.send(`Task with id ${id} deleted successfully.`);
};

const findById=async(req,res)=>{
  let{id}=req.params
  let data=await Task.findById(id)
  res.send(data)
}
module.exports = {
  getTaskData,
  createTaskData,
  updateTaskData,
  deleteTaskData,
  findById
};
