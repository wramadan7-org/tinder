/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { PaginationParam } from '../../interfaces/customInterface';
import { getListUserWithLimit } from '../../models/userModel';

const home = async (req: Request, res: Response, next: NextFunction) => {
  let { page, size } = req.query as unknown as PaginationParam;

  const resultPage: number = page || (page = 1);
  const resultSize: number = size || (size = 10);

  const offset = (resultPage - 1) * resultSize;

  try {
    const listUser:any = await getListUserWithLimit(offset, resultSize);

    res.sendWrapped('List user', httpStatus.OK, listUser);
  } catch (error: any) {
    next(error);
  }
};

export default home;
