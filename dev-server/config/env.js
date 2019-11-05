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
    console.log('setting development environment');
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(cors())

}

function setProdEnv(app) {
    app.use(bodyParser.json());
    app.use(express.static(__dirname + "/../dist"))
    console.log('setting production environment');
 
}
