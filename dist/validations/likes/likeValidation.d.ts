import Joi from 'joi';
import { CreateLikeInterface } from '../../interfaces/likes/likeInterface';
declare const validationCreateLike: (data: CreateLikeInterface) => Joi.ValidationResult<any>;
export default validationCreateLike;
