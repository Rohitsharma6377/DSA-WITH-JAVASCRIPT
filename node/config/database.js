const mongoose = require('mongoose');
const mysql = require('mysql2/promise');
const { Pool } = require('pg');

const DB_TYPE = process.env.DB_TYPE || 'mongodb';

// MongoDB Connection
const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ MongoDB connected successfully');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error.message);
        process.exit(1);
    }
};

// MySQL Connection Pool
let mysqlPool = null;
const connectMySQL = async () => {
    try {
        mysqlPool = mysql.createPool({
            host: process.env.MYSQL_HOST,
            port: process.env.MYSQL_PORT || 3306,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        // Test connection
        const connection = await mysqlPool.getConnection();
        console.log('✅ MySQL connected successfully');
        connection.release();

        // Create tasks table if not exists
        await createMySQLTable();
    } catch (error) {
        console.error('❌ MySQL connection error:', error.message);
        process.exit(1);
    }
};

const createMySQLTable = async () => {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS tasks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      status ENUM('pending', 'in-progress', 'completed') DEFAULT 'pending',
      priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `;

    try {
        await mysqlPool.query(createTableQuery);
        console.log('✅ MySQL tasks table ready');
    } catch (error) {
        console.error('❌ Error creating MySQL table:', error.message);
    }
};

// PostgreSQL Connection Pool
let pgPool = null;
const connectPostgreSQL = async () => {
    try {
        pgPool = new Pool({
            host: process.env.POSTGRES_HOST,
            port: process.env.POSTGRES_PORT || 5432,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
        });

        // Test connection
        const client = await pgPool.connect();
        console.log('✅ PostgreSQL connected successfully');
        client.release();

        // Create tasks table if not exists
        await createPostgreSQLTable();
    } catch (error) {
        console.error('❌ PostgreSQL connection error:', error.message);
        process.exit(1);
    }
};

const createPostgreSQLTable = async () => {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'in-progress', 'completed')),
      priority VARCHAR(20) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

    try {
        await pgPool.query(createTableQuery);
        console.log('✅ PostgreSQL tasks table ready');
    } catch (error) {
        console.error('❌ Error creating PostgreSQL table:', error.message);
    }
};

// Initialize database connection based on DB_TYPE
const initDatabase = async () => {
    switch (DB_TYPE.toLowerCase()) {
        case 'mongodb':
            await connectMongoDB();
            break;
        case 'mysql':
            await connectMySQL();
            break;
        case 'postgres':
        case 'postgresql':
            await connectPostgreSQL();
            break;
        default:
            console.error('❌ Invalid DB_TYPE. Use "mongodb", "mysql", or "postgres"');
            process.exit(1);
    }
};

// Export database connections
module.exports = {
    initDatabase,
    mongoose,
    mysqlPool: () => mysqlPool,
    pgPool: () => pgPool,
    DB_TYPE
};
