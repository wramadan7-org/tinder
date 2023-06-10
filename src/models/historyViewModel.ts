/* eslint-disable no-unused-vars */
import executeQuery from '../helpers/queryExecute';
import CustomError from '../middlewares/customError';

/**
 * Service to create history view multiple row
 * @param values string
 * @returns data
 */
export const createHistoryView = (values: string) => {
  const query = `INSERT INTO history_viewed (id_viewer, id_watched) VALUES ${values}`;
  const data = executeQuery(query).then((result) => result).catch((error) => {
    throw new CustomError(error, 500);
  });

  return data;
};

/**
 * Select history viewed
 * @param idViewer number
 * @param date string
 * @param limit number
 * @returns data
 */
export const getHistoryViewByIdViewer = (idViewer: number, date: string, limit: number) => {
  const query = `SELECT id_watched FROM history_viewed WHERE id_viewer = ${idViewer} AND id_watched <> ${idViewer} AND DATE(created_at) = '${date}' LIMIT ${limit}`;
  const data = executeQuery(query).then((result) => result).catch((error) => {
    throw new CustomError(error, 500);
  });

  return data;
};
