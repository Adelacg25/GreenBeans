// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-title">GreenBeans</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">My Plants</Link>
        <Link to="/add-plant">Add Plant</Link>
        <Link to="/tasks">Tasks</Link>
      </div>
    </nav>
  );
}
