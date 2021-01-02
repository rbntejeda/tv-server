import mongoose from "mongoose";
import todoSchema from "./todo.model";
mongoose.connect(`${process.env.MONGODB_CONNECTION}`, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;

const Todo = mongoose.model("Todo", todoSchema)

export {
    db,
    Todo
};
