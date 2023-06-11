/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { getUserById, updateProfileUser } from '../../models/userModel';

export const getOwnProfileController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user;

    const profile: any = await getUserById(id);

    if (profile.length <= 0) {
      res.sendWrapped('User not found', httpStatus.NOT_FOUND);
      return;
    }

    res.sendWrapped('You\'re account', httpStatus.OK, profile[0]);
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};

export const updateImageProfileController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.user;

    if (!req.file) {
      res.sendWrapped('Please insert image in profile key', httpStatus.BAD_REQUEST);
      return;
    }

    const typeFile = req.file?.mimetype.split('/')[1] || '.jpg';
    const renameFile = `static/images/profiles/${req.user.id}-${req.user.firstName}-${req.user.lastName}.${typeFile}`;

    await updateProfileUser(id, renameFile);

    res.sendWrapped('Success update profile', httpStatus.OK);
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};
