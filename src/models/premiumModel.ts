/* eslint-disable no-unused-vars */
import executeQuery from '../helpers/queryExecute';
import CustomError from '../middlewares/customError';

/**
 * Service to create premium account unlimited
 * @param id number
 * @returns data
 */
export const createPremiumUnlimited = (id: number) => {
  const query = `INSERT INTO premiums (id_user, type) VALUES (${id}, 'unlimited')`;
  const data = executeQuery(query).then((result) => result).catch((error) => {
    throw new CustomError(error, 500);
  });

  return data;
};

/**
 * Service to create premium verified
 * @param id number
 * @returns data
 */
export const createPremiumVerified = (id: number) => {
  const query = `INSERT INTO premiums (id_user, type) VALUES (${id}, 'verified')`;
  const data = executeQuery(query).then((result) => result).catch((error) => {
    throw new CustomError(error, 500);
  });

  return data;
};

/**
 * Service to get premium accound by id user
 * @param id number
 * @param type string
 * @returns data
 */
export const getPremiumAccountByIdAndType = (id: number, type: string) => {
  const query = `SELECT * FROM premiums WHERE id_user = ${id} AND type = '${type}'`;
  const data = executeQuery(query).then((result) => result).catch((error) => {
    throw new CustomError(error, 500);
  });

  return data;
};
