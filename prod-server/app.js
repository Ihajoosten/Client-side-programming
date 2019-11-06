"use strict";

var _index = require("./index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 2000;
var logger = require("../config/config.js").logger;

_index2.default.listen(port, function () {
  return logger.trace("Task Manager listening on port " + port + " in " + process.env.NODE_ENV + " mode!");
});