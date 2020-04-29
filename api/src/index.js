import bodyParser from 'body-parser';
import express from 'express';
import { botRouter } from './routes/bot';

const app = express();

app
  .use(bodyParser.json())
  .use('/bot', botRouter)
  .get('/', (req, res, next) => {
    res.send('Welcome to the website!')
  })

app.listen(1234)
