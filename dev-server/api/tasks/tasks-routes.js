import express from 'express';
const router = express.Router();

router.post('/task', (req, res) => {
    res.send('post.task - create a task');
});
router.get('/tasks', (req, res) => {
    res.send('get.tasks - get all tasks');
});
router.get('/task/:id', (req, res) => {
    res.send('get.task - get tasks by id');
});
router.put('/task/:id', (req, res) => {
    res.send('put.task - update task by id');
});
router.delete('/task', (req, res) => {
    res.send('delete.task - delete task');
});

export default router;