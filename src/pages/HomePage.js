// src/pages/HomePage.jsx
import React from "react";
import "./../styles/HomePage.css";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="title">GreenBeans</h1>
      <p className="subtitle">
        Track your plants, monitor care tasks, and grow your collection.
      </p>

      <div className="button-group">
        <button className="btn" onClick={() => navigate("/plants")}>
          View My Plants
        </button>

        <button className="btn" onClick={() => navigate("/add-plant")}>
          Add New Plant
        </button>

        <button className="btn" onClick={() => navigate("/tasks")}>
          Care Tasks
        </button>
      </div>
    </div>
  );
}
