/* eslint-disable no-unused-vars */
import executeQuery from '../helpers/queryExecute';
import CustomError from '../middlewares/customError';

/**
 * Service to create account pass by own id
 * @param idUser number
 * @param idTarget number
 * @returns data
 */
export const createPass = (idUser: number, idTarget: number) => {
  const query = `INSERT INTO passes (id_user, id_user_target) VALUES (${idUser}, ${idTarget})`;
  const data = executeQuery(query).then((result) => result).catch((error) => {
    throw new CustomError(error, 500);
  });

  return data;
};

/**
 * Select pass by id user and spesifict date to check reach limit
 * in one day spesifict date
 * @param IdUser number
 * @param date string
 * @param limit number
 * @returns data
 */
export const getPassByIdUserAndDateAndLimitToCatchLimitPass = (
  idUser: number,
  date: string,
  limit: number,
) => {
  const query = `SELECT * FROM passes WHERE id_user = ${idUser}\n
   AND DATE(created_at) = '${date}' LIMIT ${limit}`;
  const data = executeQuery(query).then((result) => result).catch((error) => {
    throw new CustomError(error, 500);
  });

  return data;
};

/**
 * Service to get id user and id user target and spesifict date to
 * check same pass user in same day
 * @param idUser number
 * @param date string
 * @param idUserTarget number
 * @param limit number
 * @returns data
 */
export const getPassByIdUserAndDateAndLimitToCatchSamePassUserInSameDay = (
  idUser: number,
  date: string,
  idUserTarget: number,
  limit: number,
) => {
  const query = `SELECT * FROM passes WHERE id_user = ${idUser}\n
   AND id_user_target = ${idUserTarget} AND DATE(created_at) = '${date}' LIMIT ${limit}`;

  const data = executeQuery(query).then((result) => result).catch((error) => {
    throw new CustomError(error, 500);
  });

  return data;
};
