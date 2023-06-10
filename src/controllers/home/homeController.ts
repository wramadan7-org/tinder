/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import moment from 'moment';
import { PaginationParam } from '../../interfaces/customInterface';
import { getListUserWithLimit } from '../../models/userModel';
import createHistoryView from '../../models/historyViewModel';

const home = async (req: Request, res: Response, next: NextFunction) => {
  let { page, size } = req.query as unknown as PaginationParam;
  const { id } = req.user;
  const date = moment().format('YYYY-MM-DD');
  console.log(date);
  const resultPage: number = page || (page = 1);
  const resultSize: number = size || (size = 10);

  const offset = (resultPage - 1) * resultSize;

  try {
    const listUser:any = await getListUserWithLimit(offset, resultSize, id, date);

    // Check length of list user
    if (listUser.length > 0) {
      // Maping list user to get own id and id user target watched
      const mapForHitory = listUser.map((o: any) => {
        const history = `(${id}, ${o.id})`;

        return history;
      });

      // Crete multiple row from get list user id
      await createHistoryView(mapForHitory.toString());
    }

    res.sendWrapped('List user', httpStatus.OK, listUser);
  } catch (error: any) {
    next(error);
  }
};

export default home;
