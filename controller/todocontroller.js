import { TODOModel } from "../model/todomodel.js";

const getAllToDo = async (req, res) => {
    const toDo = await TODOModel.find();
    res.send(toDo);
}

const saveToDo = async (req, res) =>{
    const { name } = req.body;

    await TODOModel.create({name})
    .then((data) => {
        console.log("Added successfully.....", data);
        res.send(data);
    })
    .catch((err) => console.log(err));
}

const updateToDo = async (req, res) =>{
    const { _id, name } = req.body;
    TODOModel.findByIdAndUpdate(_id, {name})
    .then(() => {
        res.send({message: "updated successfully"});
    })
    .catch((err) => console.log(err));
}


const deleteToDo = async (req, res) =>{
    const { _id } = req.body;

    TODOModel.findByIdAndDelete({_id})
    .then(() => res.send({message: "deleted successfully"}))
    .catch((err) => console.log(err));
}

export { getAllToDo, saveToDo, updateToDo, deleteToDo };