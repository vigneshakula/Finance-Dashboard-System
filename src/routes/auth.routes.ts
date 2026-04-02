import express from 'express';
import * as authController from '../controllers/auth.controllers';
import { authenticate } from '../middlewares/auth.middleware';
import { validate } from '../middlewares/validate.middleware';
import { signupSchema, signinSchema } from '../validations/auth.validations';

const router = express.Router();


router.post('/signup',validate(signupSchema), authController.signup);


router.post('/signin',validate(signinSchema), authController.signin);


export default router;