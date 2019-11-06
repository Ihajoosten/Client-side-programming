'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Routes = Routes;

var _tasksRoutes = require('./api/tasks/tasks-routes.js');

var _tasksRoutes2 = _interopRequireDefault(_tasksRoutes);

var _authenticationRoutes = require('./api/authentication/authentication-routes.js');

var _authenticationRoutes2 = _interopRequireDefault(_authenticationRoutes);

var _registerRoutes = require('./api/register/register-routes.js');

var _registerRoutes2 = _interopRequireDefault(_registerRoutes);

var _userRoutes = require('./api/user/user-routes.js');

var _userRoutes2 = _interopRequireDefault(_userRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Routes(app) {
    app.use('/api', _tasksRoutes2.default);
    app.use('/api', _authenticationRoutes2.default);
    app.use('/api', _registerRoutes2.default);
    app.use('/api', _userRoutes2.default);
}