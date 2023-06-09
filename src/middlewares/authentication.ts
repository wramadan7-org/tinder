import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import httpStatus from 'http-status';
import CustomError from './customError';

dotenv.config();

const secret: any = process.env.SECRET;

const authenticationToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  try {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      res.sendWrapped('Forbidden access', httpStatus.FORBIDDEN);
      return;
    }

    const token = authorization.slice(7, authorization.length);

    const decode = jwt.verify(token, secret);

    req.user = decode;

    next();
  } catch (error: any) {
    throw new CustomError(error, 500);
  }
};

export default authenticationToken;
