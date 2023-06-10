import { Router } from 'express';
import { loginController, registerController } from '../../controllers/auth/authController';

const app = Router();

app.post('/login', loginController);
app.post('/register', registerController);

export default app;
