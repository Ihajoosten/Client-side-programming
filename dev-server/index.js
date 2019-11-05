import express from 'express';
import { registerRoutes } from './routes';

const logger = require('../config/config.js').logger;
const app = express()
const port = 3000

registerRoutes(app);


app.listen(port, () => logger.info(`Server listening on port ${port}!`))