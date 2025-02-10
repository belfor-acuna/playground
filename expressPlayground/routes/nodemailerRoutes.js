import { sendMailController } from '../controllers/mailController.js';
import express from 'express';

const router = express.Router();

router.post('/send', sendMailController);

export default router;