import React, { useEffect, useState } from "react";
import { getTasksForUser } from "../services/api";
import TaskCard from "../components/TaskCard";
import "../styles/TasksPage.css";

export function TasksPage({ user }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (user?.user_id) {
      getTasksForUser(user.user_id).then((data) => {
        console.log("Loaded tasks:", data);
        setTasks(data);
      });
    }
  }, [user]);

  return (
    <div className="tasks-page">
      <h2 className="tasks-header">Upcoming Care Tasks</h2>

      <div className="tasks-list">
        {tasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task.care_id} task={task} />
          ))
        )}
      </div>
    </div>
  );
}