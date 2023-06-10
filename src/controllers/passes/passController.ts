/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import moment from 'moment';
import { getPremiumAccountByIdAndType } from '../../models/premiumModel';
import { CreatePassInterface } from '../../interfaces/passes/passInterface';
import validationCreatePass from '../../validations/passes/passValidation';
import { createPass, getPassByIdUserAndDateAndLimitToCatchLimitPass, getPassByIdUserAndDateAndLimitToCatchSamePassUserInSameDay } from '../../models/passModel';

const createPassController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user;
    const data: CreatePassInterface = req.body;
    const { idUserTarget } = data;
    const date = moment().format('YYYY-MM-DD');

    // Validate request body using DTO
    const validateResult = validationCreatePass(data);

    if (validateResult.error) {
      res.sendWrapped(validateResult.error.details[0].message, httpStatus.BAD_REQUEST);
      return;
    }

    // Check same account to pass on spesifict date (one day)
    const checkPassSameAccountOnSpesifictDay: any = await
    getPassByIdUserAndDateAndLimitToCatchSamePassUserInSameDay(
      id,
      date,
      idUserTarget,
      10,
    );

    if (checkPassSameAccountOnSpesifictDay.length > 0) {
      res.sendWrapped('You can\'t pass same account in the same day', httpStatus.CONFLICT);
      return;
    }

    // Check the premium account with type unlimited
    const checkPremiumAccount: any = await getPremiumAccountByIdAndType(id, 'unlimited');

    // If have account premium unlimited can pass unlimited user with different day
    if (checkPremiumAccount.length > 0) {
      await createPass(id, idUserTarget);

      res.sendWrapped('Success pass user', httpStatus.CREATED);
      return;
    }

    // Check length user we pass
    const checkLengthPassForLimit: any = await getPassByIdUserAndDateAndLimitToCatchLimitPass(
      id,
      date,
      10,
    );

    // If user we pass more than 10 on same day return reach limit
    if (checkLengthPassForLimit.length >= 10) {
      res.sendWrapped('You have reached the limit', httpStatus.CONFLICT);
      return;
    }

    // Create pass
    await createPass(id, idUserTarget);

    res.sendWrapped('Success pass user', httpStatus.CREATED);
  } catch (error: any) {
    next(error);
  }
};

export default createPassController;
