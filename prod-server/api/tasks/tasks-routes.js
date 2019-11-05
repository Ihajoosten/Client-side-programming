'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/task', function (req, res) {
    res.send('post.task - create a task');
});
router.get('/tasks', function (req, res) {
    res.send('get.tasks - get all tasks');
});
router.get('/task/:id', function (req, res) {
    res.send('get.task - get tasks by id');
});
router.put('/task/:id', function (req, res) {
    res.send('put.task - update task by id');
});
router.delete('/task', function (req, res) {
    res.send('delete.task - delete task');
});

exports.default = router;