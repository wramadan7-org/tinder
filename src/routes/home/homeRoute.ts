import { Router } from 'express';
import authenticationToken from '../../middlewares/authentication';
import home from '../../controllers/home/homeController';

const app = Router();

app.get('/', authenticationToken, home);

export default app;
