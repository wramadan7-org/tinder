import { Router } from 'express';
import authenticationToken from '../../middlewares/authentication';
import homeController from '../../controllers/homes/homeController';

const app = Router();

app.get('/', authenticationToken, homeController);

export default app;
