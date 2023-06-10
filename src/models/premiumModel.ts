/* eslint-disable no-unused-vars */
import executeQuery from '../helpers/queryExecute';
import CustomError from '../middlewares/customError';

/**
 * Service to create premium account
 * @param id number
 * @param period string
 * @returns data
 */
export const createPremium = (id: number, period: string) => {
  const query = `INSERT INTO premiums (id_user, period) VALUES (${id}, '${period}')`;
  const data = executeQuery(query).then((result) => result).catch((error) => {
    throw new CustomError(error, 500);
  });

  return data;
};

/**
 * Service to get premium accound by id user and period more than spesifict date
 * @param id number
 * @param period string
 * @returns data
 */
export const getPremiumAccountById = (id: number, period: string) => {
  const query = `SELECT * FROM premiums WHERE id_user = ${id} AND DATE(period) >= '${period}'`;
  const data = executeQuery(query).then((result) => result).catch((error) => {
    throw new CustomError(error, 500);
  });

  return data;
};
