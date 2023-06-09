import { Router } from 'express';
import authenticationToken from '../../middlewares/authentication';

const app = Router();

app.get('/', authenticationToken, (req, res) => {
  res.send({ message: 'Success' });
});

export default app;
