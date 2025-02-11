import Router from 'express';
import {testController} from '../controllers/testController.js';

const router = Router();

router.get('/', testController)

export default router;