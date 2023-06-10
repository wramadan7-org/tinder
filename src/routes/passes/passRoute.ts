import { Router } from 'express';
import authenticationToken from '../../middlewares/authentication';
import passController from '../../controllers/passes/passController';

const app = Router();

app.post('/', authenticationToken, passController);

export default app;
