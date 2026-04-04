import express from 'express';
import * as userController from '../controllers/user.controllers';
import { authenticate } from '../middlewares/auth.middleware';
import { checkAdmin } from '../middlewares/role.middleware';
import { validate } from '../middlewares/validate.middleware';
import {signupSchema,updateUserSchema} from "../validations/auth.validations";

const router = express.Router();


/**
 * @swagger
 * /api/v1/user:
 *   post:
 *     summary: Create user (Admin only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
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
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [admin, analyst, viewer]
 *     responses:
 *       201:
 *         description: User created
 *       403:
 *         description: Only admin allowed
 */
router.post(
  '/',
  authenticate,
  checkAdmin,
  validate(signupSchema),
  userController.createUser
);

/**
 * @swagger
 * /api/v1/user:
 *   get:
 *     summary: Get all users (Admin only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 *       403:
 *         description: Only admin allowed
 */
router.get(
  '/',
  authenticate,
  checkAdmin,
  userController.getUsers
);

/**
 * @swagger
 * /api/v1/user/{id}:
 *   put:
 *     summary: Update user (Admin only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User updated
 *       404:
 *         description: User not found
 */
router.put(
  '/:id',
  authenticate,
  checkAdmin,
  validate(updateUserSchema),
  userController.updateUser
);

/**
 * @swagger
 * /api/v1/user/{id}:
 *   delete:
 *     summary: Delete user (Admin only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted
 *       404:
 *         description: User not found
 */
router.delete(
  '/:id',
  authenticate,
  checkAdmin,
  userController.deleteUser
);

export default router;