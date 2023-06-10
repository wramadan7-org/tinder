/* eslint-disable no-unused-vars */
import executeQuery from '../helpers/queryExecute';
import CustomError from '../middlewares/customError';

/**
 * Service to create history view multiple row
 * @param values string
 * @returns data
 */
const createHistoryView = (values: string) => {
  const query = `INSERT INTO history_viewed (id_viewer, id_watched) VALUES ${values}`;
  const data = executeQuery(query).then((result) => result).catch((error) => {
    throw new CustomError(error, 500);
  });

  return data;
};

export default createHistoryView;
