import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { User } from './class/User';
import { authRouter } from './routes/auth';
import { botRouter } from './routes/bot';

dotenv.config();

const app = express();

app
  .use(cors({
    credentials: true,
    origin: [
      'http://127.0.0.1:8000',
      'http://127.0.0.1:8001',
      'http://127.0.0.1:1234',
      /\.?discordapps\.dev$/
    ]
  }))
  .use(bodyParser.json())
  .use(cookieParser())
  .use(User.injectUserMiddleware)
  .use('/bot', botRouter)
  .use('/auth', authRouter)
  .get('/', (req, res, next) => {
    res.send('Welcome to the website!')
  })

app.listen(8000)
