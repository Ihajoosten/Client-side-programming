/* eslint-disable no-unused-vars */
import express from "express";
import { Routes } from "./routes";
import { setEnvironment } from "./config/env.js";
import { connectToDB } from "./config/db.js";

const app = express();
const port = 38;
const logger = require("../config/config.js").logger;

setEnvironment(app);
connectToDB();
Routes(app);

app.get("/", (req, res) => {
  if (process.env.NODE_ENV !== "production") {
    return res.status(200).json({ status: "success", message: "back-end API of the Task Manager", mode: "Development" });
  } else {
    return res.sendfile("index.html", { root: __dirname + "/../dist/" });
  }
});

// Handle endpoint not found.
app.all('*', function (req, res, next) {
  logger.error('Endpoint not found.');
  var errorObject = {
    message: 'Endpoint does not exist!',
    code: 404,
    date: new Date()
  };
  next(errorObject);
});

// Error handler
app.use((error, req, res, next) => {
  res.status(error.code).json(error)
})


app.listen(port, () =>
  logger.trace(
    `Task Manager listening on port ${port}` +
      " in " +
      process.env.NODE_ENV +
      " mode!"
  )
);

module.exports = app;
