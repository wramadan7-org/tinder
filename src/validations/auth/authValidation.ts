import Joi from 'joi';
import { LoginInterface, RegisterInterface } from '../../interfaces/auth/authInterface';

export const validationLoginDto = (data: LoginInterface) => {
  const schema = Joi.object(
    {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  );

  return schema.validate(data);
};

export const validationRegisterDto = (data: RegisterInterface) => {
  const schema = Joi.object(
    {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      age: Joi.number().required(),
      gender: Joi.string().required(),
    },
  );

  return schema.validate(data);
};
