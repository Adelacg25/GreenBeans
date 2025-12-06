// src/pages/TasksPage.jsx
import React, { useEffect, useState } from "react";
import { getAllTasks } from "../services/api";
import TaskCard from "../components/TaskCard";
import "../styles/TasksPage.css";

export function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks().then(data => setTasks(data));
  }, []);

  return (
    <div className="tasks-container">
      <h2>Upcoming Care Tasks</h2>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard key={task.care_id} task={task} />
        ))}
      </div>
    </div>
  );
}
