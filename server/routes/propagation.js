import express from "express";
import {
  getAllPropagation,
  addPropagation
} from "../controllers/propagationController.js";

const router = express.Router();

router.get("/", getAllPropagation);   
router.post("/", addPropagation);     

export default router;