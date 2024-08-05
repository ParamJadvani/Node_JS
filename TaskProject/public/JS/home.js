import {
  createTask,
  deleteTask,
  getTask,
  updatedTaskData,
} from "../../components/api_task.js";

let currentTaskId = 0;

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
  console.log(data);

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

    Title.innerHTML = elem.title;
    Description.innerHTML = elem.description;
    Status.innerHTML = "Status: " + elem.status;

    InfoDiv.append(Title, Description, Status);
    taskActionsDiv.append(updateIcon, deleteIcon);
    Div.append(InfoDiv, taskActionsDiv);

    deleteIcon.addEventListener("click", () => deleteTaskByClick(elem));
    updateIcon.addEventListener("click", () => updateTaskByClick(elem));

    taskList.append(Div);
  });
};

const deleteTaskByClick = async (elem) => {
  await deleteTask(elem._id);
  await UI_View();
};

const updateTaskByClick = (task) => {
  document.getElementById("modal-title").value = task.title;
  document.getElementById("modal-description").value = task.description;
  document.getElementById("modal-status").value = task.status;

  currentTaskId = task._id;

  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();
};

document.getElementById("save-task").addEventListener("click", async () => {
  const updatedTask = {
    id: currentTaskId,
    title: document.getElementById("modal-title").value,
    description: document.getElementById("modal-description").value,
    status: document.getElementById("modal-status").value,
  };
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("exampleModal")
  );
  modal.hide();
  await updatedTaskData(updatedTask.id, updatedTask);
  await UI_View();
});

UI_View();
