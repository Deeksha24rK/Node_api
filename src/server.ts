// Create an express App
import dotenv from "dotenv";
const express = require("express");
const app = express();

dotenv.config();

const port = process.env.PORT;

// Middleware
app.use(express.json());

let users = [
  {
    id: 1,
    name: "Deeksha R Kiran",
  },
  {
    id: 2,
    name: "Karthik",
  },
  {
    id: 3,
    name: "Akshitha",
  },
  {
    id: 4,
    name: "Thrupthi",
  },
];

//routes

// CRUD - Create , Read , Update , Delete

app.get("/", (req, res) => {
  res.send("Hello response to API");
});

// Read
app.get("/users", (req, res) => {
  res.json(users);
});

// Get one user
app.get("/users/:id", (req, res) => {
  const id = +req.params.id;
  const user = users.filter((item) => item.id === id);
  res.json(user[0]);
});

// Create
app.post("/users", (req, res) => {
  const newUser = {
    id: Date.now(),
    name: req.body.name,
  };
  users.push(newUser);
  res.json(users);
});

//Update
app.put("/users", (req, res) => {
  console.log(req.body);
  users.find((user) => user.id === req.body.id).name = req.body.name;
  res.json(users);
});

//Delete
app.delete("/users", (req, res) => {
  console.log(req.body);
  users = users.filter((user) => user.id !== req.body.id);
  res.json(users);
});

// Start
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
