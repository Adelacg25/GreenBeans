// src/components/PlantCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PlantCard.css";

export function PlantCard({ plant }) {
  const navigate = useNavigate();

  return (
    <div className="plant-card" onClick={() => navigate(`/plant/${plant.plant_id}`)}>
      <img src={plant.image_url || "/placeholder.png"} alt={plant.species_name} />
      <h3>{plant.species_name}</h3>
      <p>Water every {plant.watering_frequency} days</p>
    </div>
  );
}
