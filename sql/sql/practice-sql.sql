-- Generic SQL Practice (ANSI-ish)

-- Tables
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS orders;

CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  city VARCHAR(50)
);

CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  customer_id INTEGER,
  amount DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- Inserts
INSERT INTO customers (id, name, city) VALUES
  (1, 'Alice', 'Delhi'),
  (2, 'Bob', 'Mumbai'),
  (3, 'Cathy', 'Pune');

INSERT INTO orders (id, customer_id, amount, created_at) VALUES
  (101, 1, 1200.50, CURRENT_TIMESTAMP),
  (102, 1, 399.99, CURRENT_TIMESTAMP),
  (103, 2, 250.00, CURRENT_TIMESTAMP),
  (104, 3, 999.00, CURRENT_TIMESTAMP);

-- Selects
SELECT * FROM customers;
SELECT name, city FROM customers WHERE city = 'Delhi';

-- Join
SELECT c.name, o.amount
FROM customers c
JOIN orders o ON o.customer_id = c.id
ORDER BY o.amount DESC;

-- Aggregation
SELECT city, COUNT(*) AS customers_in_city
FROM customers
GROUP BY city
ORDER BY customers_in_city DESC;

-- Subquery
SELECT name
FROM customers
WHERE id IN (
  SELECT customer_id FROM orders GROUP BY customer_id HAVING SUM(amount) > 1000
);

-- Updates and deletes
UPDATE customers SET city = 'Bengaluru' WHERE name = 'Cathy';
DELETE FROM orders WHERE amount < 300;

-- Practice Tasks
-- 1) Add an email column to customers (unique).
-- 2) Find top spender customer by total order amount.
-- 3) List customers who have not placed any orders.
-- 4) Create an index on orders(customer_id).
-- 5) Write a query to get average order amount per city.
