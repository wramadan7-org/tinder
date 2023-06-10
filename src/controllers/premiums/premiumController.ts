/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import moment from 'moment';
import { createPremium, getPremiumAccountById } from '../../models/premiumModel';

const createPremiumAccount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user;

    const aDayFromNow = moment().add(1, 'day').format('YYYY-MM-DD');

    const existsPremiumAccount: any = await getPremiumAccountById(id, aDayFromNow);

    if (existsPremiumAccount.length > 0) {
      res.sendWrapped('You\'re account already premium', httpStatus.CONFLICT);
      return;
    }

    await createPremium(id, aDayFromNow);

    res.sendWrapped('Successfull to premium account', httpStatus.CREATED);
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};

export default createPremiumAccount;
