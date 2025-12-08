import express from "express";
import {
  getAllTasks,
  getTasksForPlant,
  addTask,
  deleteTask,
  getTasksForUser
} from "../controllers/tasksController.js";

const router = express.Router();

router.get("/", getAllTasks);                
router.get("/plant/:plant_id", getTasksForPlant);  // tasks for a specific plant
router.post("/", addTask);                   
router.delete("/:id", deleteTask);
router.get("/user/:user_id", getTasksForUser);

export default router;