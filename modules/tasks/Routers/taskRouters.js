import { validate } from "../../../middleware/validateMiddleware.js";
import { Router } from "express";
import { addTaskSchema,updateTaskSchema } from "../validations/taskValidations.js";
import * as task from "../Controllers/taskController.js"
const taskRouter=Router()
taskRouter.post('/AddTask',validate(addTaskSchema),task.createTask)
taskRouter.get('/',task.getAllTasks)
taskRouter.route('/:id').get(task.getOneTask)
taskRouter.delete("/:id",task.deleteTask)
taskRouter.put("/:id",validate(updateTaskSchema),task.updateTask)
taskRouter.route("/filter").get(task.filterTask)
export default taskRouter