import express from "express";
import taskCon from "../Controllers/taskController.js";


const router = express.Router()

router. 
route("/")
.get(taskCon.get)
.post(taskCon.post);

router. 
route("/:id")
.delete(taskCon.delete)
.put(taskCon.put);

export default router;