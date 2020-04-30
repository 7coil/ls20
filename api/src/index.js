import bodyParser from 'body-parser';
import express from 'express';
import { botRouter } from './routes/bot';
import dotenv from 'dotenv';
import { authRouter } from './routes/auth';
import { User } from './class/User';

dotenv.config();

const app = express();

app
  .use(bodyParser.json())
  .use(User.injectUserMiddleware)
  .use('/bot', botRouter)
  .use('/auth', authRouter)
  .get('/', (req, res, next) => {
    res.send('Welcome to the website!')
  })

app.listen(8000)
