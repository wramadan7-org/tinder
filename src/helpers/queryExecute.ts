/* eslint-disable no-unused-vars */
import { pool } from '../configs/db.config';

const executeQuery = async (query: string, params?: any) => pool.query(query, params)
  .then(([rows, fields]) => rows)
  .catch((error) => {
    throw error;
  });

export default executeQuery;
