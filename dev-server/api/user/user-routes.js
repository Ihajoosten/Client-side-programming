import express from 'express';
const router = express.Router();

router.get('/user', (req, res) => {
    res.send('get.user - get all users');
});

router.get('/user/:id', (req, res) => {
    res.send('get.user - get user by Id');
});

export default router;