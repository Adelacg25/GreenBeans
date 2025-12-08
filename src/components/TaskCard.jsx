import React from "react";
import "../styles/TaskCard.css";

export default function TaskCard({ task }) {
  return (
    <div className="task-card">
      <div className="task-info">
        <h4>{task.task_type}</h4>

        <p><strong>Plant:</strong> {task.plant_name}</p>

        <p>
          <strong>Due:</strong>{" "}
          {task.next_due
            ? new Date(task.next_due).toLocaleDateString()
            : "No date"}
        </p>

        <p><strong>Status:</strong> {task.status}</p>
      </div>
    </div>
  );
}