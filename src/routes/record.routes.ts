import express from 'express';
import * as recordController from '../controllers/record.controllers';
import { authenticate } from '../middlewares/auth.middleware';
import { checkAdmin, checkAnalyst } from '../middlewares/role.middleware';
import { validate } from '../middlewares/validate.middleware';
import { createRecordSchema, updateRecordSchema } from '../validations/record.validations';

const router = express.Router();

/**
 * @swagger
 * /api/v1/record:
 *   post:
 *     summary: Create a new record
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [amount, type, category, date]
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 15000
 *               type:
 *                 type: string
 *                 enum: [income, expense]
 *               category:
 *                 type: string
 *                 example: Entertainment
 *               date:
 *                 type: string
 *                 example: 2026-03-10
 *     responses:
 *       201:
 *         description: Record created successfully
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Only admin allowed
 */
router.post(
  '/',
  authenticate,
  checkAdmin,
  validate(createRecordSchema),
  recordController.createRecord
);

/**
 * @swagger
 * /api/v1/record:
 *   get:
 *     summary: Get all records (Admin / Analyst only)
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of records
 *       401:
 *         description: Unauthorized (token issues)
 *       403:
 *         description: Access denied
 */
router.get(
  '/',
  authenticate,
  checkAnalyst,
  recordController.getRecords
);

/**
 * @swagger
 * /api/v1/record/{id}:
 *   put:
 *     summary: Update a record
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *               type:
 *                 type: string
 *                 enum: [income, expense]
 *               category:
 *                 type: string
 *               date:
 *                 type: string
 *     responses:
 *       200:
 *         description: Record updated successfully
 *       404:
 *         description: Record not found
 *       403:
 *         description: Only admin allowed
 */
router.put(
  '/:id',
  authenticate,
  checkAdmin,
  validate(updateRecordSchema),
  recordController.updateRecord
);

/**
 * @swagger
 * /api/v1/record/{id}:
 *   delete:
 *     summary: Delete a record
 *     tags: [Records]
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
 *         description: Record deleted successfully
 *       404:
 *         description: Record not found
 *       403:
 *         description: Only admin allowed
 */
router.delete(
  '/:id',
  authenticate,
  checkAdmin,
  recordController.deleteRecord
);

export default router;