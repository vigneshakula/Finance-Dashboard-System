import { RecordInterface } from "../types/record";
import { Model, Schema } from "mongoose";
const recordSchema = new Schema<RecordInterface>({
  amount: { type: Number, required: true },
  type: { type: String, enum: ['income', 'expense'] },
  category: String,
  date: Date,
  notes: String,
}, { timestamps: true });

const recordModel = new Model("record",recordSchema);

export default recordModel;