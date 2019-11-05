import express from 'express';
import { Routes } from './routes';
import { setEnvironment } from './config/env.js';

const logger = require('../config/config.js').logger;
const app = express()
const port = 3000

setEnvironment(app);
Routes(app);

app.get('/', (req, res) => {
    if (process.env.NODE_ENV !== 'production') {
        return res.send('running server in development mode');
    } else {
        return res.sendfile('index.html', {root: __dirname + '/../dist/'});
    }
});


app.listen(port, () => logger.trace(`Task Manager listening on port ${port}` + ' in ' + process.env.NODE_ENV + ' mode!'))