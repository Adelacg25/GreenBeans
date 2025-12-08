// src/pages/PlantsPage.jsx
import React, { useEffect, useState } from "react";
import { getAllPlants } from "../services/api";
import { PlantCard } from "../components/PlantCard";
import "../styles/PlantsPage.css";

export function PlantsPage({ user }) {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
  if (user?.user_id) {
    getAllPlants(user.user_id).then(data => {
      console.log("Plants response:", data);
      setPlants(data);
    });
  }
}, [user]);

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