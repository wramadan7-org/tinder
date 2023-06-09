import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
} = process.env;

export const pool = mysql.createPool(
  {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  },
);

export const connectDatabase = async () => {
  try {
    await pool.getConnection();

    console.log('Database connection successfully');

    // pool.end();
  } catch (error) {
    console.log('Unable to connect to the database');
  }
};
