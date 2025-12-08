import {photoQueries} from "../database/queries.js";

export const getAllPhotos = async (req, res) => {
  const photos = await photoQueries.getAllPhotos();
  res.json(photos);
};

export const getPhotosForPlant = async (req, res) => {
  const photos = await photoQueries.getPhotosByPlant(req.params.plant_id);
  res.json(photos);
};

export const addPhoto = async (req, res) => {
  const newPhoto = await photoQueries.addPhoto(req.body);
  res.json(newPhoto);
};