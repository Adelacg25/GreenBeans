// src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001",  //  backend
});

// PLANTS
export const getAllPlants = async () => {
  const res = await API.get("/plants");
  return res.data;
};

export const addPlant = async (plant) => {
  const res = await API.post("/plants", plant);
  return res.data;
};

// TASKS
export const getAllTasks = async () => {
  const res = await API.get("/tasks");
  return res.data;
};

// OPENFARM API
export const searchOpenFarm = async (query) => {
  const res = await axios.get(`https://openfarm.cc/api/v1/crops/?filter=${query}`);
  return res.data.data.map(item => ({
    id: item.id,
    name: item.attributes.name,
    image_url: item.attributes.main_image_path
  }));
};
