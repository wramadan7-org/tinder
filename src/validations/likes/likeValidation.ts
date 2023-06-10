import Joi from 'joi';
import { CreateLikeInterface } from '../../interfaces/likes/likeInterface';

const validationCreateLike = (data: CreateLikeInterface) => {
  const schema = Joi.object(
    {
      idUserTarget: Joi.number().required(),
    },
  );

  return schema.validate(data);
};

export default validationCreateLike;
