/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { createPremiumUnlimited, createPremiumVerified, getPremiumAccountByIdAndType } from '../../models/premiumModel';

export const createPremiumAccountUnlimitedController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.user;

    // Check already have account with type unlimited or not
    const existsPremiumAccount: any = await getPremiumAccountByIdAndType(id, 'unlimited');

    // If already have account premium with type unlimited return error
    if (existsPremiumAccount.length > 0) {
      res.sendWrapped('You\'re account already premium unlimited', httpStatus.CONFLICT);
      return;
    }

    // Create premium account with type unlimited
    await createPremiumUnlimited(id);

    res.sendWrapped('Successfull to premium account unlimited', httpStatus.CREATED);
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};

export const createPremiumAccountVerfiedController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.user;

    // Check already have account premium with type verified or not
    const existsPremiumAccount: any = await getPremiumAccountByIdAndType(id, 'verified');

    // Check if already have account with type verified return error
    if (existsPremiumAccount.length > 0) {
      res.sendWrapped('You\'re account already premium verified', httpStatus.CONFLICT);
      return;
    }

    // Create account premium with type verified
    await createPremiumVerified(id);

    res.sendWrapped('Successfull to premium account verified', httpStatus.CREATED);
  } catch (error: any) {
    next(error);
  }
};
