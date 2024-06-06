import dotenv from "dotenv";

// Create an express App
const express = require("express");
const app = express();

dotenv.config();

const port = process.env.PORT;

// Middleware
app.use(express.json());

// Default list of users
let users = [
  {
    id: 1,
    name: "Deeksha R Kiran",
  },
  {
    id: 2,
    name: "Karthik S Kotian",
  },
  {
    id: 3,
    name: "Ginger",
  },
];

// Routes

// CRUD - Create , Read , Update , Delete (POST , GET , PUT , DELETE)

app.get("/", (req, res) => {
  res.send("Hello response to API");
});

// Read - GET
app.get("/users", (req, res) => {
  res.json(users);
});

// Create - POST
app.post("/users", (req, res) => {
  const newUser = {
    id: Date.now(),
    name: req.body.name,
  };
  users.push(newUser);
  res.json(users);
});

// Update - PUT
app.put("/users", (req, res) => {
  users.find((user) => user.id === req.body.id).name = req.body.name;
  res.json(users);
});

// Delete - DELETE
app.delete("/users", (req, res) => {
  users = users.filter((user) => user.id !== req.body.id);
  res.json(users);
});

// Get a user from userId as param - GET
app.get("/users/:id", (req, res) => {
  const id = +req.params.id;
  const user = users.filter((item) => item.id === id);
  res.json(user[0]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
