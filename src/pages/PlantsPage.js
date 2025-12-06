// src/pages/PlantsPage.jsx
import React, { useEffect, useState } from "react";
import { getAllPlants } from "../services/api";
import { PlantCard } from "../components/PlantCard";
import "../styles/PlantsPage.css";

export function PlantsPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    getAllPlants().then(data => setPlants(data));
  }, []);

  return (
    <div className="plants-container">
      <h2>My Plants</h2>

      <div className="plants-grid">
        {plants.map((plant) => (
          <PlantCard key={plant.plant_id} plant={plant} />
        ))}
      </div>
    </div>
  );
}
