import React, { useState } from "react";
import { addPlant, searchPerenual, getPlantDetails, getCareGuide } from "../services/api";
import "../styles/AddPlantPage.css";

export function AddPlantPage({ user }) {
  const [species, setSpecies] = useState("");
  const [results, setResults] = useState([]);

  const searchPlants = async () => {
    const data = await searchPerenual(species);
    setResults(data);
  };

  // idk i couldnt pull from the data so i just did this but it doesnt even work :(
  function inferWateringFromCareGuide(careTextArray) {
    if (!careTextArray || careTextArray.length === 0) return "Unknown";
    const text = careTextArray.join(" ").toLowerCase();
    if (text.includes("keep soil moist") || text.includes("moist soil")) return 3;
    if (text.includes("water frequently") || text.includes("frequent")) return 4;
    if (text.includes("water moderately") || text.includes("moderate")) return 7;
    if (text.includes("water sparingly") || text.includes("sparingly")) return 14;
    if (text.includes("allow soil to dry") || text.includes("dry between watering")) return 10;
    return "Unknown";
  }

  return (
    <div className="add-plant-container">
      <h2>Add New Plant</h2>

      <div className="search-bar">
        <input
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          placeholder="Search plant species..."
        />
        <button onClick={searchPlants}>Search</button>
      </div>

      <div className="search-results">
        {results.map((plant) => (
          <div
            key={plant.id}
            className="result-item"
            onClick={async () => {
              const details = await getPlantDetails(plant.id);
              const guideData = await getCareGuide(plant.id);
              const careTextArray = guideData["care-guides"]?.map((g) => g.care_guide) || [];
                        
              let wateringDays = inferWateringFromCareGuide(careTextArray);
                        
              if (wateringDays === "Unknown") {
                wateringDays = 7; 
              }
            
              console.log("USER USED FOR INSERT:", user);
            
              await addPlant({
                user_id: user?.user_id,
                plant_name: plant.name,
                species_name: plant.name,
                light_requirements: details.sunlight?.join(", ") || "Unknown",
                watering_frequency: wateringDays,
                image_url: plant.image_url,
              });
            
              alert(`${plant.name} added!`);
            }}
          >
            <img src={plant.image_url} alt={plant.name} />
            <p>{plant.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}