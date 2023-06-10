import { Router } from 'express';
import authenticationToken from '../../middlewares/authentication';
import { createPremiumAccountUnlimited, createPremiumAccountVerfied } from '../../controllers/premiums/premiumController';

const app = Router();

app.post('/unlimited', authenticationToken, createPremiumAccountUnlimited);
app.post('/verified', authenticationToken, createPremiumAccountVerfied);

export default app;
