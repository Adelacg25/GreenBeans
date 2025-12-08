import express from "express";
import {
  getAllPhotos,
  getPhotosForPlant,
  addPhoto
} from "../controllers/photosController.js";

const router = express.Router();

router.get("/", getAllPhotos);                
router.get("/plant/:plant_id", getPhotosForPlant); 
router.post("/", addPhoto);                   

export default router;