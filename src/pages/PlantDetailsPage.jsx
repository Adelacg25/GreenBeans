import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlantDetails, getCareGuide, getAllPlants } from "../services/api";
import "../styles/PlantDetailsPage.css";

export function PlantDetailPage({ user }) {
  const { plant_id } = useParams();  
  const [plant, setPlant] = useState(null);
  const [details, setDetails] = useState(null);
  const [careGuide, setCareGuide] = useState(null);

  useEffect(() => {
    async function load() {
      if (!user?.user_id) return;

      const all = await getAllPlants(user.user_id);
      const found = all.find(p => p.plant_id === Number(plant_id));
      setPlant(found);

      if (!found?.species_id) return;

      const d = await getPlantDetails(found.species_id);
      setDetails(d);

      const g = await getCareGuide(found.species_id);
      setCareGuide(g);
    }

    load();
  }, [plant_id, user]);

  if (!plant) return <h2>Loading...</h2>;

  return (
    <div className="plant-details-container">
      <h2>{plant.plant_name}</h2>

      <img 
        className="hero-img" 
        src={plant.image_url} 
        alt={plant.plant_name} 
      />

      <div className="details-box">
        <p><strong>Species:</strong> {plant.species_name}</p>
        <p><strong>Water every:</strong> {plant.watering_frequency} days</p>

        {/* ahhh*/}
        {details?.sunlight && (
          <p><strong>Light:</strong> {details.sunlight.join(", ")}</p>
        )}
      </div>

      {/* idk */}
      {careGuide?.["care-guides"]?.length > 0 && (
        <div className="care-guide-box">
          <h3>Care Guide</h3>
          {careGuide["care-guides"].map((c, i) => (
            <p key={i}>{c.care_guide}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default PlantDetailPage;