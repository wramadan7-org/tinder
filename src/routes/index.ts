import { Router } from 'express';
import authRoute from './auth/authRoute';
import homeRoute from './homes/homeRoute';
import premiumRoute from './premiums/premiumRoute';
import likeRoute from './likes/likeRoute';

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
  {
    path: '/like',
    route: likeRoute,
  },
];

defaultRouter.forEach(({ path, route }) => {
  app.use(path, route);
});

export default app;
