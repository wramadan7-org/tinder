import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import CustomError from '../middlewares/customError';

dotenv.config();

const secret: any = process.env.SECRET;

/**
 * Function generate token jwt
 * @param data object
 * @returns string
 */
const generateToken = async (data: any) => {
  try {
    const token = jwt.sign(data, secret);

    return token;
  } catch (error: any) {
    throw new CustomError(error, 400);
  }
};

export default generateToken;
