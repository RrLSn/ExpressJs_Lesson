// const express = require("express");
import express from "express";
const router = express.Router();

let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Jim Doe" },
  { id: 4, name: "Jimmy Doe" },
];

//Get all users
router.get("/", (req, res) => {
  //limit
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(users.slice(0, limit));
  }
  res.status(200).json(users);
});

//Get single users
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  //   const usersId = users.filter((user) => user.id === id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    return res
      .status(404)
      .json({ Error_message: `user wih the id of ${id} does not exist` });
  }
  res.status(200).json(user);
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

// app.get("/cart", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "cart.html"));
// });

//Create Users
router.post("/", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };

  if (!newUser.name) {
    return res.status(404).json({ Error_message: `Please include a name` });
  }
  users.push(newUser);
  res.status(200).json(users);
});

// Update Users
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    return res
      .status(404)
      .json({ Error_message: `user with the id of ${id} does not exist` });
  }
  user.name = req.body.name;
  res.status(200).json(user);
});

//Delete Users
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    return res
      .status(404)
      .json({ Error_message: `user with the id of ${id} does not exist` });
  }
  users = users.filter((user) => user.id !== id);
  res.status(200).json(users);
});

export default router;
