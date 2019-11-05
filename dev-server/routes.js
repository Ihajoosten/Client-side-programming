import taskRoutes from './api/tasks/tasks-routes.js';

export function registerRoutes(app) {
    app.use('/api', taskRoutes)
}