import taskRoutes from './api/tasks/tasks-routes.js';
import authRoutes from './api/authentication/authentication-routes.js';
import regRoutes from './api/register/register-routes.js';
import userRoutes from './api/user/user-routes.js';

export function Routes(app) {
    app.use('/api', taskRoutes);
    app.use('/api', authRoutes);
    app.use('/api', regRoutes);
    app.use('/api', userRoutes);
}