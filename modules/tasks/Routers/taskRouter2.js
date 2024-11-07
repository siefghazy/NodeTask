import { Router } from "express";
import { filterTask } from "../Controllers/taskController.js";
const filterRouter=Router()
filterRouter.route('/').get(filterTask)
export default filterRouter