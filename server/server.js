// server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const plants = [
  { plant_id: 1, species_name: "Aloe Vera", watering_frequency: 7, image_url: "/placeholder.png" },
  { plant_id: 2, species_name: "Snake Plant", watering_frequency: 14, image_url: "/placeholder.png" }
];

const tasks = [
  { care_id: 1, plant_id: 1, task_type: "Water", frequency: 7, next_due: "2025-12-07" },
  { care_id: 2, plant_id: 2, task_type: "Fertilize", frequency: 30, next_due: "2025-12-15" }
];

app.get("/plants", (req, res) => res.json(plants));
app.get("/tasks", (req, res) => res.json(tasks));

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
