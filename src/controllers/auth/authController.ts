/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

import { createDataUser, getUserByEmail } from '../../models/userModel';
import { validationLoginDto, validationRegisterDto } from '../../validations/auth/authValidation';
import { LoginInterface, RegisterInterface } from '../../interfaces/auth/authInterface';
import { bcrypted, compared } from '../../helpers/bcrypting';
import generateToken from '../../helpers/generateToken';

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
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

      // Compare password from body with encrypting data password in database
      const comparePassword = await compared(password, existsUser[0].password);

      // If password not match return error
      if (!comparePassword) {
        res.sendWrapped('Password incorrect.', httpStatus.BAD_REQUEST);
        return;
      }

      // Define data to sign in token
      dataUser = {
        id: existsUser[0].id,
        firstName: existsUser[0].first_name,
        lastName: existsUser[0].last_name,
        email: existsUser[0].email,
        age: existsUser[0].age,
        gender: existsUser[0].gender,
      };
    }

    // Generate token
    const token = await generateToken(dataUser);

    // Data to send in response
    const result = {
      token,
    };

    res.sendWrapped('Login successfully', httpStatus.OK, result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const registerController = async (req: Request, res: Response, next: NextFunction) => {
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

    // Encrypting password from request body to insert in database
    const bcryptPassword = await bcrypted(password, 12);

    // Refactor password from body with password from encrypting password
    const results = {
      firstName,
      lastName,
      age,
      gender,
      email,
      password: bcryptPassword,
    };

    // Create user
    await createDataUser(results);

    res.sendWrapped('Success', httpStatus.OK, results);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
