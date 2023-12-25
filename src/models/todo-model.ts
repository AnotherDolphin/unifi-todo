import mongoose, { Schema, Document } from "mongoose";

export interface ToDoDocument extends Document {
  text: string;
  done: boolean;
  userId: string;
}

const ToDoSchema: Schema = new Schema({
  text: { type: String, required: true },
  done: { type: Boolean, required: false, default: false },
  userId: { type: String, required: true },
});

export default mongoose.model<ToDoDocument>("ToDo", ToDoSchema);
