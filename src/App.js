import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PlantsPage } from "./pages/PlantsPage";
import { AddPlantPage } from "./pages/AddPlantPage";
import { PlantDetailPage } from "./pages/PlantDetailPage";
import { TasksPage } from "./pages/TasksPage";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plants" element={<PlantsPage />} />
        <Route path="/add-plant" element={<AddPlantPage />} />
        <Route path="/plant/:id" element={<PlantDetailPage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
    </Router>
  );
}
