DROP DATABASE IF EXISTS "greenbeans";
DROP DATABASE IF EXISTS "Greenbeans";
DROP TABLE IF EXISTS photos CASCADE;
DROP TABLE IF EXISTS propagation CASCADE;
DROP TABLE IF EXISTS care_tasks CASCADE;
DROP TABLE IF EXISTS plants CASCADE;
DROP TABLE IF EXISTS users CASCADE;


CREATE DATABASE greenbeans;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    profile_picture_url TEXT,     
    preferences JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE plants (
    plant_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    plant_name VARCHAR(255),
    species_name VARCHAR(255),
    light_requirements VARCHAR(255),
    watering_frequency INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- I thought tasks were a more fitting name
CREATE TABLE care_tasks (
    care_id SERIAL PRIMARY KEY,
    plant_id INT REFERENCES plants(plant_id),
    task_type VARCHAR(255),
    frequency INT,
    next_due DATE,
    status VARCHAR(50) DEFAULT 'Pending'
);

CREATE TABLE propagation (
    propagation_id SERIAL PRIMARY KEY,
    plant_id INT REFERENCES plants(plant_id),
    method VARCHAR(255),
    cutting_date DATE
);

CREATE TABLE photos (
    photo_id SERIAL PRIMARY KEY,
    plant_id INT REFERENCES plants(plant_id),
    image_url TEXT,
    entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE plants ADD COLUMN image_url TEXT;

ALTER TABLE plants
ALTER COLUMN watering_frequency TYPE TEXT;


DELETE FROM users WHERE email = 'test@test.com';
INSERT INTO users (name, email, password_hash)
VALUES ('Alili', 'alili@test.com', '$2b$10$v7fQsc7QUzHm54AwMCUU2uMWmjMBbrqrgCHAtnourY.efBM1REVOm');
SELECT * FROM users;

SELECT datname FROM pg_database;
