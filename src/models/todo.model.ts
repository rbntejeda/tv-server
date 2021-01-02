import mongoose from 'mongoose';
const { Schema } = mongoose;

const todoSchema = new Schema({
    task: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createAt: { type: Date, default: Date.now }
});

export default todoSchema;