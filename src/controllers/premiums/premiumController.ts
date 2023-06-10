/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { createPremiumUnlimited, createPremiumVerified, getPremiumAccountByIdAndType } from '../../models/premiumModel';

export const createPremiumAccountUnlimited = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.user;

    const existsPremiumAccount: any = await getPremiumAccountByIdAndType(id, 'unlimited');

    if (existsPremiumAccount.length > 0) {
      res.sendWrapped('You\'re account already premium unlimited', httpStatus.CONFLICT);
      return;
    }

    await createPremiumUnlimited(id);

    res.sendWrapped('Successfull to premium account unlimited', httpStatus.CREATED);
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};

export const createPremiumAccountVerfied = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.user;

    const existsPremiumAccount: any = await getPremiumAccountByIdAndType(id, 'verified');

    if (existsPremiumAccount.length > 0) {
      res.sendWrapped('You\'re account already premium verified', httpStatus.CONFLICT);
      return;
    }

    await createPremiumVerified(id);

    res.sendWrapped('Successfull to premium account verified', httpStatus.CREATED);
  } catch (error: any) {
    next(error);
  }
};
