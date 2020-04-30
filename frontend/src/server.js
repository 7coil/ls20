import { App } from './App';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import htmlDocument from './index.html';

const app = express();

app
  .get('^/$', (req, res, next) => {
    const html = ReactDOMServer.renderToString(
      <App />
    )
  })

app.listen(8000)
