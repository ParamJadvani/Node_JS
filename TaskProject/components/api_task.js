const createTask = async (data) => {
  await fetch("http://localhost:3118/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const getTask = () => {
  return fetch("http://localhost:3118/tasks").then((response) =>
    response.json()
  );
};

export { createTask, getTask };
