import { Router } from 'express';
import { login, register } from '../controllers/auth/authController';

const app = Router();

app.post('/login', login);
app.post('/register', register);

export default app;
