import express from "express";
import {
  getAllPlants,
  getPlantById,
  getPlantsForUser,
  addPlant
} from "../controllers/plantsController.js";

const router = express.Router();

router.get("/", getAllPlants);
router.get("/user/:user_id", getPlantsForUser);  // ⭐ This is the missing route
router.get("/:id", getPlantById);
router.post("/", addPlant);

export default router;