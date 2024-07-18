// const express = require("express");
import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  postUser,
  updateUser,
} from "../controllers/userController.js";
const router = express.Router();

//Get all users
router.get("/", getUsers);

//Get single users
router.get("/:id", getUser);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//Create Users

router.post("/", postUser);

// Update Users
router.put("/:id", updateUser);

//Delete Users
router.delete("/:id", deleteUser);

export default router;
