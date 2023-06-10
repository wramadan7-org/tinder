import Joi from 'joi';
import { CreatePremiumAccount } from '../../interfaces/premiums/premiumInterface';

const validateCreatePremiumAccount = (data: CreatePremiumAccount) => {
  const schema = Joi.object(
    {
      period: Joi.date().iso().required(),
    },
  );

  return schema.validate(data);
};

export default validateCreatePremiumAccount;
