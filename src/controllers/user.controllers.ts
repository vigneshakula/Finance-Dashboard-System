import { Request, Response } from 'express';
import * as userService from '../services/user.services';

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);

    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ message: "Error fetching users" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.updateUser(
      req.params.id as string,
      req.body
    );

    res.status(200).json(user);
  } catch (err: any) {
    res.status(404).json({ message: err.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await userService.deleteUser(req.params.id as string);

    res.status(200).json({ message: 'User deleted' });
  } catch (err: any) {
    res.status(404).json({ message: err.message });
  }
};