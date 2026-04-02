import express from 'express';
import * as userController from '../controllers/user.controllers';
import { authenticate } from '../middlewares/auth.middleware';
import { checkAdmin } from '../middlewares/role.middleware';
import { validate } from '../middlewares/validate.middleware';
import {signupSchema,updateUserSchema} from "../validations/auth.validations";

const router = express.Router();



router.post(
  '/',
  authenticate,
  checkAdmin,
  validate(signupSchema),
  userController.createUser
);

router.get(
  '/',
  authenticate,
  checkAdmin,
  userController.getUsers
);

router.put(
  '/:id',
  authenticate,
  checkAdmin,
  validate(updateUserSchema),
  userController.updateUser
);

router.delete(
  '/:id',
  authenticate,
  checkAdmin,
  userController.deleteUser
);

export default router;