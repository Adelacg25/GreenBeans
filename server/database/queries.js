import { pool } from "./connection.js";

// plants
export const plantQueries = {
  getAllPlants: () => {
    return pool.query("SELECT * FROM plants").then(res => res.rows);
  },

  addPlant: (plant) => {
    return pool.query(
      `INSERT INTO plants (user_id, plant_name, species_name, light_requirements, watering_frequency, image_url)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [
        plant.user_id,
        plant.plant_name,
        plant.species_name,
        plant.light_requirements,
        plant.watering_frequency,
        plant.image_url
      ]
  ).then(res => res.rows[0]);
},

  getPlantById: async (id) => {
    const result = await pool.query(
      "SELECT * FROM plants WHERE plant_id = $1",
      [id]
    );
    return result.rows[0];
  },
  
  getPlantsForUser: (user_id) =>
  pool.query("SELECT * FROM plants WHERE user_id = $1", [user_id])
      .then(res => res.rows),
};




// tasks
export const taskQueries = {
  getAll: () =>
    pool.query("SELECT * FROM care_tasks ORDER BY care_id ASC"),

  insert: ({ plant_id, task_type, frequency, next_due }) =>
    pool.query(
      `INSERT INTO care_tasks (plant_id, task_type, frequency, next_due)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [plant_id, task_type, frequency, next_due]
    ),

  getByPlantId: (plant_id) =>
    pool.query("SELECT * FROM care_tasks WHERE plant_id = $1", [plant_id]),

  delete: (id) =>
    pool.query("DELETE FROM care_tasks WHERE care_id = $1", [id]),

  getTasksForUser:  async (user_id) => {
    const query = `
      SELECT ct.*, p.plant_name
      FROM care_tasks ct
      JOIN plants p ON ct.plant_id = p.plant_id
      WHERE p.user_id = $1
      ORDER BY ct.next_due ASC;
    `;
    const result = await pool.query(query, [user_id]);
    return result.rows;
  },
};


// users
export const userQueries = {
  findByEmail: (email) =>
    pool.query("SELECT * FROM users WHERE email = $1", [email]),

  insert: ({ name, email, password_hash }) =>
    pool.query(
      `INSERT INTO users (name, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING user_id, name, email`,
      [name, email, password_hash]
    )
};


// propagation
export const propagationQueries = {
  getAll: () =>
    pool.query("SELECT * FROM propagation ORDER BY propagation_id ASC"),

  insert: ({ plant_id, method, cutting_date }) =>
    pool.query(
      `INSERT INTO propagation (plant_id, method, cutting_date)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [plant_id, method, cutting_date]
    )
};


// photos
export const photoQueries = {
  getAllPhotos: async () => {
    const result = await pool.query("SELECT * FROM photos");
    return result.rows;
  },

  getPhotosByPlant: async (plant_id) => {
    const result = await pool.query(
      "SELECT * FROM photos WHERE plant_id = $1",
      [plant_id]
    );
    return result.rows;
  },

  addPhoto: async ({ plant_id, image_url }) => {
    const result = await pool.query(
      `INSERT INTO photos (plant_id, image_url)
       VALUES ($1, $2)
       RETURNING *`,
      [plant_id, image_url]
    );
    return result.rows[0];
  }
};