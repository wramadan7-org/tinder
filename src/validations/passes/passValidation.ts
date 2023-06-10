import Joi from 'joi';
import { CreatePassInterface } from '../../interfaces/passes/passInterface';

const validationCreateLike = (data: CreatePassInterface) => {
  const schema = Joi.object(
    {
      idUserTarget: Joi.number().required(),
    },
  );

  return schema.validate(data);
};

export default validationCreateLike;
