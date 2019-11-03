const express = require("express");


const app = express();
const port = 1999;


app.listen(port, () => logger.info(`skoolworkshops app listening on port ${port}!`))

module.exports = app

