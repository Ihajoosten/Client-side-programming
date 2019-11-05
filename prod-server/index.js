'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

var _env = require('./config/env.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = require('../config/config.js').logger;
var app = (0, _express2.default)();
var port = 3000;

(0, _env.setEnvironment)(app);
(0, _routes.Routes)(app);

app.get('/', function (req, res) {
    if (process.env.NODE_ENV !== 'production') {
        return res.send('running server in development mode');
    } else {
        return res.sendfile('index.html', { root: __dirname + '/../dist/' });
    }
});

app.listen(port, function () {
    return logger.trace('Task Manager listening on port ' + port);
});