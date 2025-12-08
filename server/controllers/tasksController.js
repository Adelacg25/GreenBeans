import { taskQueries } from "../database/queries.js";

export const getAllTasks = async (req, res) => {
  const result = await taskQueries.getAll();
    res.json(result.rows);
};

export const getTasksForPlant = async (req, res) => {
    const result = await taskQueries.getByPlantId(req.params.plant_id);
    res.json(result.rows);

};

export const addTask = async (req, res) => {
    const result = await taskQueries.insert(req.body);
    res.json(result.rows[0]);
};

export const deleteTask = async (req, res) => {
    await taskQueries.delete(req.params.id);
    res.json({ message: "Task deleted" });
};

export const getTasksForUser = async (req, res) => {
  const { user_id } = req.params;
  const tasks = await taskQueries.getTasksForUser(user_id);
  res.json(tasks);
};