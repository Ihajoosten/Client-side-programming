'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/user', function (req, res) {
    res.send('get.user - get all users');
});

router.get('/user/:id', function (req, res) {
    res.send('get.user - get user by Id');
});

exports.default = router;