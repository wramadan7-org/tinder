/* eslint-disable no-unused-vars */
import executeQuery from '../helpers/queryExecute';
import CustomError from '../middlewares/customError';

/**
 * Service to create account passes by own id
 * @param idUser number
 * @param idTarget number
 * @returns data
 */
const craetePass = (idUser: number, idTarget: number) => {
  const query = `INSERT INTO passes (id_user, id_user_target) VALUES (${idUser}, ${idTarget})`;
  const data = executeQuery(query).then((result) => result).catch((error) => {
    throw new CustomError(error, 500);
  });

  return data;
};

export default craetePass;
