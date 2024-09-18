const UserModel = require("../model/user_model");

const User = require("express").Router();

User.get("/", async (req, res) => res.send(await UserModel.find()));

User.get("/filter", async (req, res) => {
  const { age, name, role, sort } = req.query;

  const query = {};

  if (role) query.role = role;
  if (name) query.name = name;
  if (age) {
    const [minAge, maxAge] = age.split("-").map(Number);
    if (minAge != null && maxAge != null) {
      query.age = { $gte: minAge, $lte: maxAge };
    }
  }

  let usersQuery = UserModel.find(query);

  if (sort === "asc") {
    usersQuery = usersQuery.sort({ age: 1 });
  } else if (sort === "desc") {
    usersQuery = usersQuery.sort({ age: -1 });
  }

  const users = await usersQuery.exec();
  res.send(users);
});

User.get("/:id", async (req, res) =>
  res.send(await UserModel.findById(req.params.id))
);

User.post("/signup", async (req, res) =>
  res.status(201).send(await UserModel.create(req.body))
);

User.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) return res.status(400).send("User not found");
  if (user.password !== password)
    return res.status(400).send("Invalid password");

  res.send(user);
});

User.patch("/:id", async (req, res) => {
  const updatedUser = await UserModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.send(updatedUser);
});

User.delete("/:id", async (req, res) => {
  await UserModel.findByIdAndDelete(req.params.id);
  res.send(`User with id ${req.params.id} deleted successfully.`);
});

module.exports = User;
