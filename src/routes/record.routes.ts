import express from 'express';
import * as recordController from '../controllers/record.controllers';
import { authenticate } from '../middlewares/auth.middleware';
import { checkAdmin, checkAnalyst } from '../middlewares/role.middleware';
import { validate } from '../middlewares/validate.middleware';
import { createRecordSchema, updateRecordSchema } from '../validations/record.validations';

const router = express.Router();


router.post(
  '/',
  authenticate,
  checkAdmin,
  validate(createRecordSchema),
  recordController.createRecord
);


router.get(
  '/',
  authenticate,
  checkAnalyst,
  recordController.getRecords
);


router.put(
  '/:id',
  authenticate,
  checkAdmin,
  validate(updateRecordSchema),
  recordController.updateRecord
);


router.delete(
  '/:id',
  authenticate,
  checkAdmin,
  recordController.deleteRecord
);

export default router;