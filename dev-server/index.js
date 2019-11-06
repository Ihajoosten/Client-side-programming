/* eslint-disable no-unused-vars */
import express from "express";
import { Routes } from "./routes";
import { setEnvironment } from "./config/env.js";
import { connectToDB } from "./config/db.js";

const app = express();
const port = 3000;
const logger = require("../config/config.js").logger;

setEnvironment(app);
connectToDB();
Routes(app);

app.get("/", (req, res) => {
  if (process.env.NODE_ENV !== "production") {
    return res.send("running server in development mode");
  } else {
    return res.sendfile("index.html", { root: __dirname + "/../dist/" });
  }
});

app.listen(port, () =>
  logger.trace(
    `Task Manager listening on port ${port}` +
      " in " +
      process.env.NODE_ENV +
      " mode!"
  )
);

module.exports = app;
