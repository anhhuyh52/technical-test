import express, { Application } from 'express';
import {UserRoutes} from './routes/user-routes';
import ApiError from './utils/ApiError';
import * as bodyParser from "body-parser";

const functions = require('firebase-functions');

const app: Application = express();

app.use(express.json());

app.use('/api', UserRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((err: ApiError, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).send(err.message);
  }
  return res.status(500).send('Something went wrong');
});


exports.app = functions.https.onRequest(app);
