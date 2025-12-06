// src/pages/AddPlantPage.jsx
import React, { useState } from "react";
import { addPlant, searchOpenFarm } from "../services/api";
import "../styles/AddPlantPage.css";

export function AddPlantPage() {
  const [species, setSpecies] = useState("");
  const [results, setResults] = useState([]);

  const searchPlants = async () => {
    const data = await searchOpenFarm(species);
    setResults(data);
  };

  return (
    <div className="add-plant-container">
      <h2>Add New Plant</h2>

      <input
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
        placeholder="Search plant species..."
      />

      <button onClick={searchPlants}>Search</button>

      <div className="search-results">
        {results.map((plant) => (
          <div
            key={plant.id}
            className="result-item"
            onClick={() => addPlant(plant)}
          >
            <img src={plant.image_url} alt={plant.name} />
            <p>{plant.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
