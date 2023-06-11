import { Router } from 'express';
import authRoute from './auth/authRoute';
import homeRoute from './homes/homeRoute';
import premiumRoute from './premiums/premiumRoute';
import likeRoute from './likes/likeRoute';
import passRoute from './passes/passRoute';
import userRoute from './users/userRoute';

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
  {
    path: '/pass',
    route: passRoute,
  },
  {
    path: '/user',
    route: userRoute,
  },
];

defaultRouter.forEach(({ path, route }) => {
  app.use(path, route);
});

export default app;
