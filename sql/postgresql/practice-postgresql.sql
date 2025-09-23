-- PostgreSQL Practice
-- Connect to a DB and run these statements in psql or a GUI (e.g., pgAdmin)

-- Drop and create schema
DROP SCHEMA IF EXISTS practice_schema CASCADE;
CREATE SCHEMA practice_schema;
SET search_path TO practice_schema;

-- Create tables
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  age INT,
  city TEXT
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  amount NUMERIC(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert sample data
INSERT INTO users (name, age, city) VALUES
  ('Alice', 25, 'Delhi'),
  ('Bob', 30, 'Mumbai'),
  ('Cathy', 28, 'Delhi'),
  ('Dinesh', 22, 'Pune');

INSERT INTO orders (user_id, amount)
VALUES
  (1, 1200.50),
  (1, 399.99),
  (2, 250.00),
  (3, 999.00),
  (4, 199.99);

-- Basic queries
SELECT * FROM users;
SELECT name, city FROM users WHERE age >= 25 ORDER BY age DESC;

-- Joins
SELECT u.name, o.amount, o.created_at
FROM users u
JOIN orders o ON o.user_id = u.id
ORDER BY o.created_at DESC;

-- Aggregations
SELECT city, COUNT(*) AS user_count, AVG(age) AS avg_age
FROM users
GROUP BY city
ORDER BY user_count DESC;

-- Window functions
SELECT u.name, o.amount,
       AVG(o.amount) OVER (PARTITION BY u.id) AS avg_spend_per_user
FROM users u
JOIN orders o ON o.user_id = u.id;

-- Updates and deletes
UPDATE users SET age = age + 1 WHERE city = 'Delhi';
DELETE FROM orders WHERE amount < 200;

-- Practice Tasks
-- 1) Add a unique email column to users and populate it.
-- 2) Find top 2 users by total order amount.
-- 3) Create an index on orders(user_id) and explain analyze the join.
-- 4) Add a CHECK that age must be >= 18.
-- 5) Write a query to get users with no orders.
