import { Router } from 'express';
import authenticationToken from '../../middlewares/authentication';
import likeController from '../../controllers/likes/likeController';

const app = Router();

app.post('/', authenticationToken, likeController);

export default app;
