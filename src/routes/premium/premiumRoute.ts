import { Router } from 'express';
import authenticationToken from '../../middlewares/authentication';
import createPremiumAccount from '../../controllers/premiums/premiumController';

const app = Router();

app.post('/', authenticationToken, createPremiumAccount);

export default app;
