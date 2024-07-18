// const express = require("express");
// const path = require("path");
// const users = require("./routes/users");

import express from "express";
import path from "path";
import users from "./routes/users.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFoundHandler from "./middleware/notFound.js";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 8080;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// logger
app.use(logger);

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//setup static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/cart", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "cart.html"));
});

//Routes
app.use("/api/users", users);

//Error handler
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
