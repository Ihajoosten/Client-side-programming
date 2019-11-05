'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _stringUtility = require('../utilities/string-utility.js');

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose2.default.Schema({
    username: String,
    first: String,
    last: String,
    password: String
});
userSchema.set('timestamps', true);
userSchema.virtual('fullName').get(function () {
    var first = _stringUtility.StringUtility.capitalize(this.first.toLowerCase());
    var last = _stringUtility.StringUtility.capitalize(this.last.toLowerCase());
    return first + ' ' + last;
});

userSchema.pre('save', function (next) {
    this.username = this.username.toLowerCase();
    this.first = this.first.toLowerCase();
    this.last = this.last.toLowerCase();
    var unsafePassword = this.password;
    this.password = _bcryptNodejs2.default.hashSync(unsafePassword);
    next();
});

exports.default = _mongoose2.default.model("user", userSchema);