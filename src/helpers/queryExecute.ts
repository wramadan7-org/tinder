/* eslint-disable no-unused-vars */
import { pool } from '../configs/db.config';

/**
 * Function to execude query
 * @param query string
 * @param params any
 * @returns array
 */
const executeQuery = async (query: string, params?: any) => pool.query(query, params)
  .then(([rows, fields]) => rows)
  .catch((error) => {
    throw error;
  });

export default executeQuery;
