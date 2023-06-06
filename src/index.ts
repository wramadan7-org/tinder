import express, { Express } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';

import routeV1 from './routes/index';

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

app.listen(port, () => {
  console.log(`Server run at port ${port}`);
});
