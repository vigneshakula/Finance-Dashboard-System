import User from "../models/user";
import bcrypt from "bcryptjs";
import { signup } from "./auth.services";

export const createUser = async (data:any)=>{
    return signup(data);
}

export const updateUser = async (id: string, data: any) => {
  const user = await User.findByIdAndUpdate(id, data, { returnDocument: "after" });

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

export const getUsers = async () => {
  const users = await User.find();
  return users;
};

export const deleteUser = async (id: string) => {
  const user = await User.findByIdAndDelete(id);

  if (!user) {
    throw new Error('User not found');
  }
};