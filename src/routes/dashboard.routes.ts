import express from 'express';
import { getSummary } from '../controllers/dashboard.controllers';
import { authenticate } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('/summary', authenticate, getSummary);

export default router;