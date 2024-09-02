const express = require("express");
const path = require("path");
const PORT = 8090;
const app = express();

const { checkPostData } = require("./middlewares/postdata");
const { courseData } = require("./data");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) =>
  res.send("Welcome to the Online Course Management API")
);

app.get("/index", (req, res) =>
  res.sendFile(path.join(__dirname, "index.html"))
);

app.get("/add", (req, res) =>
  res.sendFile(path.join(__dirname, "addcourse.html"))
);

app.get("/courses", (req, res) => res.send(courseData));

app.get("/courses/filter", (req, res) => {
  const { category, duration, instructor } = req.query;
  let filteredcourses = courseData;

  if (category)
    filteredcourses = filteredcourses.filter(
      (e) => e.category.toLowerCase() === category.toLocaleLowerCase()
    );

  if (instructor)
    filteredcourses = filteredcourses.filter(
      (e) => e.instructor.toLowerCase() === instructor.toLowerCase()
    );

  if (duration)
    filteredcourses = filteredcourses.filter(
      (e) => Number(e.duration) === Number(duration)
    );

  res.json(filteredcourses);
});

app.post("/courses/add", checkPostData, (req, res) => {
  const newcourse = {
    ...req.body,
    id: courseData.length ? courseData[courseData.length - 1].id + 1 : 1,
  };
  courseData.push(newcourse);
  res.send(newcourse);
});

app.patch("/courses/update/:id", (req, res) => {
  const { id } = req.params;
  const courseIndex = courseData.findIndex(
    (course) => course.id === parseInt(id)
  );

  if (courseIndex === -1) return res.status(404).send("courses not found");

  courseData[courseIndex] = { ...courseData[courseIndex], ...req.body };
  res.json(courseData);
});

app.delete("/courses/delete/:id", (req, res) => {
  const { id } = req.params;
  const courseIndex = courseData.findIndex((e) => e.id === parseInt(id));

  if (courseIndex === -1) return res.status(404).send("courses not found");

  courseData.splice(courseIndex, 1);
  res.json(courseData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
