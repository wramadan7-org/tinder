import { Router } from 'express';
import authenticationToken from '../../middlewares/authentication';
import upload from '../../helpers/multer';
import { getOwnProfileController, updateImageProfileController } from '../../controllers/users/userController';

const app = Router();

// app.post('/', authenticationToken, upload.single('profile'), (req: Request, res: Response) => {
//   const data = {
//     file: req.file,
//     body: req.body,
//   };

//   res.send(data);
// });
app.get('/', authenticationToken, getOwnProfileController);
app.patch('/', authenticationToken, upload.single('profile'), updateImageProfileController);

export default app;
