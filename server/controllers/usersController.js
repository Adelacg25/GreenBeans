import { userQueries } from "../database/queries.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const password_hash = await bcrypt.hash(password, 10);

    const result = await userQueries.insert({ name, email, password_hash });
    res.json(result.rows[0]);
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const userResult = await userQueries.findByEmail(email);
  const user = userResult.rows[0];

  if (!user) return res.status(400).json({ error: "Invalid user" });

  const valid = await bcrypt.compare(password, user.password_hash);

  if (!valid) return res.status(400).json({ error: "Invalid password" });
  
  res.json({
    user_id: user.user_id,
    name: user.name,
    email: user.email
  });
};