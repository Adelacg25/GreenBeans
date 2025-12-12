import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001",
});

export const getAllPlants = async (user_id) => {
  const res = await API.get(`/plants/user/${user_id}`);
  return res.data;
};

export const getTasksForUser = async (user_id) => {
  const res = await API.get(`/tasks/user/${user_id}`);
  return res.data;
};

export const addPlant = async (plant) => {
  const res = await API.post("/plants", plant);
  return res.data;
};

export const searchPerenual = async (query) => {
  const res = await axios.get(
    `https://perenual.com/api/species-list?key=${process.env.REACT_APP_PERENUAL_KEY}&q=${query}`
  );

  return res.data.data.map((item) => ({
    id: item.id,
    name: item.common_name || item.scientific_name?.[0] || "Unknown",
    image_url: item.default_image?.regular_url || item.default_image?.original_url,
  }));
};

export const getPlantDetails = async (id) => {
  const res = await axios.get(
    `https://perenual.com/api/species/details/${id}?key=${process.env.REACT_APP_PERENUAL_KEY}`
  );
  return res.data;
};

export const getCareGuide = async (id) => {
  const res = await axios.get(
    `https://perenual.com/api/species-care-guide/${id}?key=${process.env.REACT_APP_PERENUAL_KEY}`
  );
  return res.data;
};

export const deletePlant = async (plant_id) => {
  return API.delete(`/plants/${plant_id}`);
};