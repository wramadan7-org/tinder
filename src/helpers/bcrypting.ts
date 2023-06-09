import bcrypt, { compare } from 'bcrypt';
import CustomError from '../middlewares/customError';

/**
 * Function to encrypt password
 * @param password string
 * @param salt number
 * @returns string
 */
export const bcrypted = async (password: string, salt: number) => {
  try {
    const bcrypting = await bcrypt.hash(password, salt);

    return bcrypting;
  } catch (error: any) {
    throw new CustomError(error, 400);
  }
};

/**
 * Function to compare password
 * @param password string
 * @param encryptPassword string
 * @returns boolean
 */
export const compared = async (password: string, encryptPassword: string) => {
  try {
    const comparing = await compare(password, encryptPassword);

    return comparing;
  } catch (error: any) {
    throw new CustomError(error, 400);
  }
};
