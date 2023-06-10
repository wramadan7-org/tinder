import { Router } from 'express';
import authRoute from './auth/authRoute';
import homeRoute from './home/homeRoute';
import premiumRoute from './premium/premiumRoute';

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
  {
    path: '/premium',
    route: premiumRoute,
  },
];

defaultRouter.forEach(({ path, route }) => {
  app.use(path, route);
});

export default app;
