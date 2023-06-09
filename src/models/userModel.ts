/* eslint-disable no-unused-vars */
import executeQuery from '../helpers/queryExecute';
import { CreateUser, UpdateUser } from '../interfaces/users/userInterface';
import CustomError from '../middlewares/customError';

/**
 * Service to create data user
 * @param dataParam object
 * @returns data
 */
export const createDataUser = (dataParam: CreateUser) => {
  const query = `INSERT INTO users (first_name, last_name, email, password, age, gender) VALUES ('${dataParam.firstName}', '${dataParam.lastName}', '${dataParam.email}', '${dataParam.password}', ${dataParam.age}, '${dataParam.gender}')`;

  const data = executeQuery(query).then((results) => results).catch((error) => {
    throw new CustomError(error, 500);
  });

  return data;
};

/**
 * Service to get all data user
 * @returns data
 */
export const getAllDataUser = () => {
  const query = 'SELECT * FROM users';
  const data = executeQuery(query).then((results) => results).catch((error) => {
    throw new CustomError(error, 500);
  });

  return data;
};

/**
 * Service to get user by email
 * @param email string
 * @returns data
 */
export const getUserByEmail = async (email: string) => {
  try {
    const query = `SELECT * FROM users WHERE email = '${email}'`;
    const data = await executeQuery(query);

    return data;
  } catch (error: any) {
    throw new CustomError(error, 500);
  }
};

export const updateUserById = (idParam: number, dataParam: UpdateUser) => {
  const query = 'P';
};
