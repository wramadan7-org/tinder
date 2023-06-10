/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import moment from 'moment';
import { getPremiumAccountByIdAndType } from '../../models/premiumModel';
import { CreateLikeInterface } from '../../interfaces/likes/likeInterface';
import validationCreateLike from '../../validations/likes/likeValidation';
import { createLike, getLikeByIdUserAndDateAndLimitToCatchLimitLike, getLikeByIdUserAndDateAndLimitToCatchSameLikeUserInSameDay } from '../../models/likeModel';

const createLikeController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user;
    const data: CreateLikeInterface = req.body;
    const { idUserTarget } = data;
    const date = moment().format('YYYY-MM-DD');

    // Validate request body using DTO
    const validateResult = validationCreateLike(data);

    if (validateResult.error) {
      res.sendWrapped(validateResult.error.details[0].message, httpStatus.BAD_REQUEST);
      return;
    }

    // Check same account to like on spesifict date (one day)
    const checkLikeSameAccountOnSpesifictDay: any = await
    getLikeByIdUserAndDateAndLimitToCatchSameLikeUserInSameDay(
      id,
      date,
      idUserTarget,
      10,
    );

    if (checkLikeSameAccountOnSpesifictDay.length > 0) {
      res.sendWrapped('You can\'t like same account in the same day', httpStatus.CONFLICT);
      return;
    }

    // Check the premium account with type unlimited
    const checkPremiumAccount: any = await getPremiumAccountByIdAndType(id, 'unlimited');

    // If have account premium unlimited can like unlimited user with different day
    if (checkPremiumAccount.length > 0) {
      await createLike(id, idUserTarget);

      res.sendWrapped('Success like user', httpStatus.CREATED);
      return;
    }

    // Check length user we like
    const checkLengthLikeForLimit: any = await getLikeByIdUserAndDateAndLimitToCatchLimitLike(
      id,
      date,
      10,
    );

    // If user we like more than 10 on same day return reach limit
    if (checkLengthLikeForLimit.length >= 10) {
      res.sendWrapped('You have reached the limit', httpStatus.CONFLICT);
      return;
    }

    // Create like
    await createLike(id, idUserTarget);

    res.sendWrapped('Success like user', httpStatus.CREATED);
  } catch (error: any) {
    next(error);
  }
};

export default createLikeController;
