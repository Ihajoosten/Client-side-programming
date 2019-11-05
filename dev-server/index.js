import express from 'express';
import { Routes } from './routes';
import { setEnvironment } from './config/env.js';

const logger = require('../config/config.js').logger;
const app = express()
const port = 3000

setEnvironment(app);
Routes(app);


app.listen(port, () => logger.info(`Server listening on port ${port}!`))