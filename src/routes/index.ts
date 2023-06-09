import { Router } from 'express';
import authRoute from './auth/authRoute';
import homeRoute from './home/homeRoute';

const app = Router();

const defaultRouter = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/home',
    route: homeRoute,
  },
];

defaultRouter.forEach(({ path, route }) => {
  app.use(path, route);
});

export default app;
