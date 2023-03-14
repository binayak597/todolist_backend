import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     require: true
    // }
    name: String
});

const TODOModel = mongoose.model("TODO", todoSchema);

export { TODOModel };