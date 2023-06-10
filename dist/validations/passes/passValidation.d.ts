import Joi from 'joi';
import { CreatePassInterface } from '../../interfaces/passes/passInterface';
declare const validationCreateLike: (data: CreatePassInterface) => Joi.ValidationResult<any>;
export default validationCreateLike;
