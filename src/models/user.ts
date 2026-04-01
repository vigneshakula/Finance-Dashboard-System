import { Schema,Model } from "mongoose";
import { User } from "../types/user";
import { RecordInterface } from "../types/record";
const userSchema = new Schema<User>({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['viewer', 'analyst', 'admin'], default: 'viewer' },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

const userModal = new Model("user",userSchema);

export default userModal;
