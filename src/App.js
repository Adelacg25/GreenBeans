// src/App.js
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Named exports
import { HomePage } from "./pages/HomePage";
import { PlantsPage } from "./pages/PlantsPage";
import { AddPlantPage } from "./pages/AddPlantPage";
import { PlantDetailPage } from "./pages/PlantDetailPage";
import { TasksPage } from "./pages/TasksPage";

// Default exports
import Navbar from "./components/Navbar"; //idk how to fix this error 
import LoginPage from "./pages/LoginPage";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Navbar user={user} /> {/* pass user to Navbar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plants" element={<PlantsPage />} />
        <Route path="/add-plant" element={<AddPlantPage />} />
        <Route path="/plant/:id" element={<PlantDetailPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/login" element={<LoginPage onLogin={setUser} />} />
      </Routes>
    </Router>
  );
}
