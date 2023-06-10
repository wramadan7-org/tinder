/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import moment from 'moment';
import { PaginationParam } from '../../interfaces/customInterface';
import { getListUserWithLimit } from '../../models/userModel';
import { createHistoryView, getHistoryViewByIdViewer } from '../../models/historyViewModel';
import { getPremiumAccountByIdAndType } from '../../models/premiumModel';

const home = async (req: Request, res: Response, next: NextFunction) => {
  let { page, size } = req.query as unknown as PaginationParam;
  const { id } = req.user;
  const date = moment().format('YYYY-MM-DD');
  let isUnlimited: boolean = false;

  const resultPage: number = page || (page = 1);
  const resultSize: number = size || (size = 10);

  const offset = (resultPage - 1) * resultSize;

  try {
    let listUser:any;
    const checkPremiumAccount: any = await getPremiumAccountByIdAndType(id, 'unlimited');

    if (checkPremiumAccount.length > 0) {
      isUnlimited = true;
      listUser = await getListUserWithLimit(offset, resultSize, id, date);
    } else {
      const checkLengthHistory: any = await getHistoryViewByIdViewer(id, date, 10);

      if (checkLengthHistory.length >= 10) {
        res.sendWrapped('You have reached the limit', httpStatus.CONFLICT);
        return;
      }
      listUser = await getListUserWithLimit(offset, resultSize, id, date);
    }

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
