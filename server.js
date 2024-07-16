// const express = require("express");
// const path = require("path");
// const users = require("./routes/users");

import express from "express";
import path from "path";
import users from "./routes/users.js";

const PORT = process.env.PORT || 8080;
const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//setup static folder
// app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/api/users", users);

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
