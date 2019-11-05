import express from 'express';
const router = express.Router();
import * as controller from './user-controller';

router.get('/user', controller.index);

router.get('/user/:id', (req, res) => {
    res.send('get.user - get user by Id');
});

export default router;