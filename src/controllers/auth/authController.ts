/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import httpStatus from 'http-status';

import { createDataUser, getUserByEmail } from '../../models/userModel';
import { validationRegisterDto } from '../../validations/auth/authValidation';
import { RegisterInterface } from '../../interfaces/auth/authInterface';

export const login = async (req: Request, res: Response) => {
  try {
    res.send({ message: 'Success' });
  } catch (error) {
    throw error;
  }
};

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data: RegisterInterface = req.body;
    const {
      firstName,
      lastName,
      age,
      gender,
      email,
      password,
    } = data;

    // Validate request body using DTO
    const validateResult = validationRegisterDto(data);

    if (validateResult.error) {
      res.sendWrapped(validateResult.error.details[0].message, httpStatus.BAD_REQUEST);
      return;
    }

    const existsUser = await getUserByEmail(email);

    // Check length
    if (Array.isArray(existsUser)) {
      const lengthResults = existsUser.length;

      if (lengthResults) {
        res.sendWrapped('User already exists', httpStatus.CONFLICT);
        return;
      }
    }

    const bcrypted = await bcrypt.hash(password, 12);

    const results = {
      firstName,
      lastName,
      age,
      gender,
      email,
      password: bcrypted,
    };

    await createDataUser(results);

    res.sendWrapped('Success', httpStatus.OK, results);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
