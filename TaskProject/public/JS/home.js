import { createTask, getTask } from "../../components/api_task.js";

document.getElementById("taskManager").addEventListener("submit", (e) => {
  e.preventDefault();
  const Title = document.getElementById("Title").value;
  const Description = document.getElementById("Description").value;

  const task = {
    Title,
    Description,
  };
  createTask(task);

  UI_View();
});
const taskList = document.getElementById("task-list");

const UI_View = async () => {
  taskList.innerHTML = "";
  const data = await getTask();

  data.forEach((elem) => {
    const Div = document.createElement("div");
    const InfoDiv = document.createElement("div");
    const Title = document.createElement("h4");
    const Description = document.createElement("p");
    const Status = document.createElement("p");
    const taskActionsDiv = document.createElement("div");
    const updateIcon = document.createElement("i");
    const deleteIcon = document.createElement("i");

    Div.className = "task";
    InfoDiv.className = "task-info";
    taskActionsDiv.className = "task-actions";
    updateIcon.className = "fas fa-edit";
    deleteIcon.className = "fas fa-trash";

    Title.innerHTML = elem.Title;
    Description.innerHTML = elem.Description;
    Status.innerHTML = "Status: " + elem.status;

    InfoDiv.append(Title, Description, Status);
    taskActionsDiv.append(updateIcon, deleteIcon);

    Div.append(InfoDiv, taskActionsDiv);
  });
};

UI_View();
