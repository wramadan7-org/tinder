import Joi from 'joi';
import { LoginInterface, RegisterInterface } from '../../interfaces/auth/authInterface';
export declare const validationLoginDto: (data: LoginInterface) => Joi.ValidationResult<any>;
export declare const validationRegisterDto: (data: RegisterInterface) => Joi.ValidationResult<any>;
