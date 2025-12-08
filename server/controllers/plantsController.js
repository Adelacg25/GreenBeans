
import { plantQueries, taskQueries } from "../database/queries.js";
import dayjs from "dayjs";  

export const getAllPlants = async (req, res) => {
  const plants = await plantQueries.getAllPlants();
  res.json(plants);
};

export const addPlant = async (req, res) => {
  const newPlant = await plantQueries.addPlant(req.body);

  const wateringDays = req.body.watering_frequency || 7;

  const nextDue = dayjs().add(wateringDays, "day").format("YYYY-MM-DD");

  await taskQueries.insert({
    plant_id: newPlant.plant_id,
    task_type: "Water",
    frequency: wateringDays,
    next_due: nextDue
  });

  res.json(newPlant);
};

export const getPlantById = async (req, res) => {
  const plant = await plantQueries.getPlantById(req.params.id);
  res.json(plant);
};

export const getPlantsForUser = async (req, res) => {
  const { user_id } = req.params;
  const plants = await plantQueries.getPlantsForUser(user_id);
  res.json(plants);
};