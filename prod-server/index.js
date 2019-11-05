'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = require('../config/config.js').logger;
var app = (0, _express2.default)();
var port = 3000;

(0, _routes.Routes)(app);

app.listen(port, function () {
  return logger.info('Server listening on port ' + port + '!');
});