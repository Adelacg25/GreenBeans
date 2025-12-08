import { propagationQueries } from "../database/queries.js";

export const getAllPropagation = async (req, res) => {
    const result = await propagationQueries.getAll();
    res.json(result.rows);
};

export const addPropagation = async (req, res) => {
    const result = await propagationQueries.insert(req.body);
    res.json(result.rows[0]);
};