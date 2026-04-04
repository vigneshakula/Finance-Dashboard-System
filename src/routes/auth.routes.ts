import express from 'express';
import * as authController from '../controllers/auth.controllers';
import { authenticate } from '../middlewares/auth.middleware';
import { validate } from '../middlewares/validate.middleware';
import { signupSchema, signinSchema } from '../validations/auth.validations';

const router = express.Router();

/**
 * @swagger
 * /api/v1/auth/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, password]
 *             properties:
 *               name:
 *                 type: string
 *                 example: viewer123
 *               email:
 *                 type: string
 *                 example: viewer123@gmail.com
 *               password:
 *                 type: string
 *                 example: htg@12345
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Validation or user exists error
 */
router.post('/signup',validate(signupSchema), authController.signup);

/**
 * @swagger
 * /api/v1/auth/signin:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 example: viewer123@gmail.com
 *               password:
 *                 type: string
 *                 example: htg@12345
 *     responses:
 *       200:
 *         description: Login successful (returns token)
 *       400:
 *         description: Invalid credentials or input
 */

router.post('/signin',validate(signinSchema), authController.signin);


export default router;