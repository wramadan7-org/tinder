import Joi from 'joi';
import { CreatePremiumAccount } from '../../interfaces/premiums/premiumInterface';
declare const validateCreatePremiumAccount: (data: CreatePremiumAccount) => Joi.ValidationResult<any>;
export default validateCreatePremiumAccount;
