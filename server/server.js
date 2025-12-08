// server.js
import express from "express";
import cors from "cors";

import plantsRoutes from "./routes/plants.js";
import tasksRoutes from "./routes/tasks.js";          
import userRoutes from "./routes/users.js";           
import propagationRoutes from "./routes/propagation.js";
import photoRoutes from "./routes/photos.js";        

const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/plants", plantsRoutes);
app.use("/tasks", tasksRoutes);     
app.use("/users", userRoutes);     
app.use("/propagation", propagationRoutes); 
app.use("/photos", photoRoutes);    

app.get("/", (req, res) => {
  res.send("routes running");
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));