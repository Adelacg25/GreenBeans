import React from "react";
import "./HomePage.css";

export function HomePage() {
  return (
    <div className="home-container">
      <h1 className="title">GreenBeans</h1>
      <p className="subtitle">
        Track your plants, monitor care tasks, and grow your collection.
      </p>

      <div className="button-group">
        <button className="btn">View My Plants</button>
        <button className="btn">Add New Plant</button>
        <button className="btn">Care Tasks</button>
      </div>
    </div>
  );
}
