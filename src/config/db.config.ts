import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config();

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
} = process.env;

const connectDatabase = () => {
  const connection = mysql.createConnection(
    {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    },
  );

  connection.query('SELECT 1 + 1 AS solution', (error, rows) => {
    if (error) throw error;

    console.log('The solution is: ', rows[0].solution);
  });

  connection.end();
};

export default connectDatabase;
