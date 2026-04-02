import { RecordInterface } from "../types/record";
import { model, Schema } from "mongoose";
const recordSchema = new Schema<RecordInterface>({
  amount: { type: Number, required: true },
  type: { type: String, enum: ['income', 'expense'] },
  category: String,
  date: Date,
  notes: String,
  userId:String,
}, { timestamps: true });

const recordModel = model("record",recordSchema);

export default recordModel;