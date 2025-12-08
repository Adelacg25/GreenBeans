// src/App.js
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Named exports
import { HomePage } from "./pages/HomePage";
import { PlantsPage } from "./pages/PlantsPage";
import { AddPlantPage } from "./pages/AddPlantPage";
import PlantDetailsPage from "./pages/PlantDetailsPage";
import { TasksPage } from "./pages/TasksPage";
import { TestOpenFarm } from "./pages/testOFarm";

// Default exports
import Navbar from "./components/Navbar.jsx"; //idk how to fix this error (forgot the ".jsx" part)
import LoginPage from "./pages/LoginPage";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Navbar user={user} /> {/* pass user to Navbar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plants" element={<PlantsPage user={user} />} />
        <Route path="/add-plant" element={<AddPlantPage user={user} />} />
        <Route path="/plant/:plant_id" element={<PlantDetailsPage user={user}/>} />
        <Route path="/tasks" element={<TasksPage user={user} />} />
        <Route path="/login" element={<LoginPage onLogin={setUser} />} />
        <Route path="/test" element={<TestOpenFarm />} />
      </Routes>
    </Router>
  );
}
