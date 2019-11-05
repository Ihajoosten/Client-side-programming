import express from 'express';
const router = express.Router();
import * as controller from './register-controller.js';

router.post('/register', controller.index);

export default router;