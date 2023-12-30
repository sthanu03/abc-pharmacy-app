-- migrations/001_create_tables.up.sql

-- Create the "items" table
CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    unit_price DECIMAL NOT NULL,
    item_category VARCHAR(255) NOT NULL
);

-- Create the "invoices" table
CREATE TABLE IF NOT EXISTS invoices (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    mobile_no VARCHAR(15) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    billing_type VARCHAR(50) NOT NULL
);
