import React from "react";
import "../styles/TaskCard.css";

function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h3>{task.name}</h3>
      <p>Due: {task.dueDate}</p>
      <p>Status: {task.status}</p>
    </div>
  );
}

export default TaskCard;
