import mongoose, { Document, Schema } from "mongoose";

export interface ITodo extends Document {
    user: string;
    title: string;
    description: string;
    dueDate: Date;
    isCompleted: boolean;
}

const TodoSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date, required: true },
    isCompleted: { type: Boolean, default: false },
    reminderTime: { type: Date },
});

export default mongoose.model<ITodo>("Todo", TodoSchema);
