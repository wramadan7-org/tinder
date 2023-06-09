/* eslint-disable no-unused-vars */
import executeQuery from '../helpers/queryExecute';
import { CreateUser } from '../interfaces/users/userInterface';
import CustomError from '../middlewares/customError';

export const createDataUser = (data: CreateUser) => {
  const query = `INSERT INTO users (first_name, last_name, email, password, age, gender) VALUES ('${data.firstName}', '${data.lastName}', '${data.email}', '${data.password}', ${data.age}, '${data.gender}')`;

  const created = executeQuery(query).then((results) => results).catch((error) => {
    throw new CustomError(error, 500);
  });

  return created;
};

export const getAllDataUser = () => {
  const query = 'SELECT * FROM users';
  const data = executeQuery(query).then((results) => results).catch((error) => {
    throw error;
  });
  return data;
};
