/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

import { createDataUser, getUserByEmail } from '../../models/userModel';
import { validationLoginDto, validationRegisterDto } from '../../validations/auth/authValidation';
import { LoginInterface, RegisterInterface } from '../../interfaces/auth/authInterface';
import { bcrypted, compared } from '../../helpers/bcrypting';
import generateToken from '../../helpers/generateToken';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data: LoginInterface = req.body;
    const {
      email,
      password,
    } = data;

    // Validate request body using DTO
    const validateResult = validationLoginDto(data);

    if (validateResult.error) {
      res.sendWrapped(validateResult.error.details[0].message, httpStatus.BAD_REQUEST);
      return;
    }

    // Check exists user
    const existsUser: any = await getUserByEmail(email);

    let dataUser:any;

    // Check length
    if (Array.isArray(existsUser)) {
      if (!existsUser.length) {
        res.sendWrapped('Email incorrect', httpStatus.BAD_REQUEST);
        return;
      }

      const comparePassword = await compared(password, existsUser[0].password);

      if (!comparePassword) {
        res.sendWrapped('Password incorrect.', httpStatus.BAD_REQUEST);
        return;
      }

      dataUser = {
        firstName: existsUser[0].first_name,
        lastName: existsUser[0].last_name,
        email: existsUser[0].email,
        age: existsUser[0].age,
        gender: existsUser[0].gender,
      };
    }

    const token = await generateToken(dataUser);

    const result = {
      token,
    };

    res.sendWrapped('Login successfully', httpStatus.OK, result);
  } catch (error) {
    console.log(error);
    next(error);
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

    // Check exists user
    const existsUser: any = await getUserByEmail(email);

    // Check length
    if (Array.isArray(existsUser)) {
      if (existsUser.length) {
        res.sendWrapped('User already exists', httpStatus.CONFLICT);
        return;
      }
    }

    const bcryptPassword = await bcrypted(password, 12);

    const results = {
      firstName,
      lastName,
      age,
      gender,
      email,
      password: bcryptPassword,
    };

    await createDataUser(results);

    res.sendWrapped('Success', httpStatus.OK, results);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
