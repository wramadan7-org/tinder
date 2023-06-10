import { Router } from 'express';
import authenticationToken from '../../middlewares/authentication';
import { createPremiumAccountUnlimitedController, createPremiumAccountVerfiedController } from '../../controllers/premiums/premiumController';

const app = Router();

app.post('/unlimited', authenticationToken, createPremiumAccountUnlimitedController);
app.post('/verified', authenticationToken, createPremiumAccountVerfiedController);

export default app;
