import { Router } from 'express';
import authRoute from './authRoute';

const app = Router();

const defaultRouter = [
  {
    path: '/auth',
    route: authRoute,
  },
];

defaultRouter.forEach(({ path, route }) => {
  app.use(path, route);
});

export default app;
