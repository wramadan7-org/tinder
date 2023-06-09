/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
import express, {
  Express, Request, Response, NextFunction,
} from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';

import httpStatus from 'http-status';
import routeV1 from './routes/index';
import { connectDatabase } from './configs/db.config';
import CustomError from './middlewares/customError';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// Set cors
app.use(cors());
app.options('*', cors());
// Urlencoded
app.use(express.urlencoded({ extended: true }));
// Convert JSON
app.use(express.json());
// Protect app from some well-known web vulnerabilities by setting HTTP headers appropriately.
app.use(helmet());

// Run default route
app.use('/v1', routeV1);

// Set response wrapper
app.response.sendWrapped = function (message: string, statusCode, data?: any) {
  return this.status(statusCode).send({
    status: statusCode || httpStatus.OK,
    message,
    data,
  });
};

// Connect the database
connectDatabase();

// Custom 404
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send(
    {
      status: 404,
      message: "Sorry can't find that!",
    },
  );
});

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // Handle custom errors
  if (err instanceof CustomError) {
    res.status(err.statusCode).send(
      {
        status: err.statusCode,
        message: err.message,
      },
    );
  } else {
    // Handle other errors
    res.sendWrapped(err.message, httpStatus.INTERNAL_SERVER_ERROR);
  }
});

app.listen(port, () => {
  console.log(`Server run at port ${port}`);
});
