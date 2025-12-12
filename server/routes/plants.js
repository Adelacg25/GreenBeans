import express from "express";
import {
  getAllPlants,
  getPlantById,
  getPlantsForUser,
  addPlant,
  deletePlant
} from "../controllers/plantsController.js";

const router = express.Router();

router.get("/", getAllPlants);
router.get("/user/:user_id", getPlantsForUser);
router.get("/:id", getPlantById);
router.post("/", addPlant);
router.delete("/:id", deletePlant);

export default router;