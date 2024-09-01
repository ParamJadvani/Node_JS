const express = require("express");
const PORT = 8090;

const app = express();
app.use(express.json());

let initialTodo = [
  { title: "HTML", isCompleted: true, id: 1 },
  { title: "Javascript", isCompleted: true, id: 2 },
  { title: "React", isCompleted: false, id: 3 },
];

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.get("/todos", (req, res) => {
  res.send(initialTodo);
});

app.get("/todo/:id", (req, res) => {
  const { id } = req.params;
  const todo = initialTodo.find((item) => item.id == parseInt(id));
  if (!todo) return res.status(404).send("Todo not found!");
  res.send(todo);
});

app.get("/findbystatus", (req, res) => {
  const { status } = req.query;
  const todos = initialTodo.filter((item) => item.isCompleted == status);
  res.send(todos);
});

app.post("/addtodo", (req, res) => {
  const { title, isCompleted } = req.body;

  const newTodo = {
    title: typeof title == "string" ? title : null,
    isCompleted: typeof isCompleted === "boolean" ? isCompleted : false,
    id: initialTodo.length ? initialTodo[initialTodo.length - 1].id + 1 : 1,
  };

  initialTodo.push(newTodo);
  res.send(newTodo);
});

app.patch("/update/:id", (req, res) => {
  const { id } = req.params;
  const { title, isCompleted } = req.body;
  console.log(id);

  const index = initialTodo.findIndex((todo) => todo.id == id);
  if (index === -1) return res.status(404).send("Todo not found!");

  initialTodo[index].title =
    typeof title === "string" ? title : initialTodo[index].title;

  initialTodo[index].isCompleted =
    typeof isCompleted === "boolean"
      ? isCompleted
      : initialTodo[index].isCompleted;

  res.send(initialTodo[index]);
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);

  const index = initialTodo.findIndex((todo) => todo.id == id);
  if (index === -1) return res.status(404).send("Todo not found!");
  res.send({
    deletedTodo: initialTodo.splice(index, 1)[0],
    todos: initialTodo,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
