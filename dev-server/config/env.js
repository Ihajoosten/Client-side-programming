import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser'

export function setEnvironment(app) {
    if (process.env.NODE_ENV !== 'production') {
        setDevEnv(app);
    } else {
        setProdEnv(app);
    }
}

function setDevEnv(app) {
    process.env.NODE_ENV = 'development';
    process.env.DB_URL = 'mongodb://localhost:27017/task-manager-db';
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(cors())

}

function setProdEnv(app) {
    process.env.NODE_ENV = 'production';
    process.env.DB_URL = 'mongodb://localhost:27017/prod-db';
    app.use(bodyParser.json());
    app.use(express.static(__dirname + "/../dist")) 
}
