'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = require('../config/config.js').logger;

var app = (0, _express2.default)();
var port = 3000;

app.get('/', function (req, res) {
  logger.trace("/ GET aangeroepen");
  res.send('Hello World!');
});

// Generic endpoint handler - voor alle routes
app.all('*', function (req, res, next) {
  logger.info('Generieke afhandeling aangeroepen!');
  var method = req.method,
      url = req.url;

  logger.info(method + ' ' + url);
  next();
});

// Handle endpoint not found.
app.all('*', function (req, res, next) {
  var method = req.method,
      url = req.url;

  var errorMessage = method + ' ' + url + ' does not exist.';
  logger.warn(errorMessage);
  var errorObject = {
    message: errorMessage,
    code: 404,
    date: new Date()
  };
  next(errorObject);
});

// Error handler
app.use(function (error, req, res) {
  logger.error('Error handler: ', error.message.toString());
  res.status(error.code).json(error);
});

app.listen(port, function () {
  return logger.info('Server listening on port ' + port + '!');
});