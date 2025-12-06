// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar({ user }) {
  return (
    <nav className="nav">
      <h1 className="nav-title">GreenBeans</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">My Plants</Link>
        <Link to="/add-plant">Add Plant</Link>
        <Link to="/tasks">Tasks</Link>
        {user ? (
          <span>Welcome, {user.name}</span>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

