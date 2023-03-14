import { Router } from "express";
import { getAllToDo, saveToDo, updateToDo, deleteToDo } from "../controller/todocontroller.js";

const router = Router();

router.get("/", getAllToDo);
router.post("/save", saveToDo);
router.post("/update", updateToDo);
router.post("/delete", deleteToDo);

export { router } ;