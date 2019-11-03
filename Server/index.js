const express = require("express");
const logger = require('./Config/config').logger



const app = express();
const port = 1999;


app.listen(port, () => logger.info(`Server listening on port ${port}!`))

module.exports = app

