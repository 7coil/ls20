import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { matchPath, StaticRouter } from 'react-router';
import { App } from './App';
import { ReduxProvider } from './components/functional/ReduxProvider';
import { redirects } from './data/redirects';
import { routes } from './data/routes';
import { configureStore } from './redux/store';

const htmlDocument = fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'UTF-8' })
const app = express();

app
  .use('*', async (req, res, next) => {
    for (const redirect of redirects) {
      const match = matchPath(req.baseUrl, redirect);
      if (match) return res.redirect(redirect.status, redirect.to({ match }))
    }

    const store = configureStore();
    const context = { status: 200 }
    const promises = []
    // https://medium.freecodecamp.org/demystifying-reacts-server-side-render-de335d408fe4
    // Fetch everything needed to render the page from redux.
    for (const route of routes) {
      if (typeof route.component.serverFetch === 'function') {
        const result = route.component.serverFetch({
          store, context
        })

        if (result instanceof Promise) promises.push(result);
        if (Array.isArray(result)) {
          for (const potentialPromise of result) {
            if (potentialPromise instanceof Promise) promises.push(result);
          }
        }
      }
    }

    await Promise.all(promises);

    const html = ReactDOMServer.renderToString(
      <ReduxProvider store={store}>
        <StaticRouter location={req.baseUrl} context={context}>
          <App />
        </StaticRouter>
      </ReduxProvider>
    )

    const helmet = Helmet.renderStatic();

    res.send(
      htmlDocument
        .replace(
          '<!-- HEAD -->',
          helmet.title.toString() +
          helmet.meta.toString() +
          helmet.link.toString() +
          helmet.script.toString()
        )
        .replace(
          '<!-- BODY -->',
          html
        )
        .replace(
          '<!-- REDUX -->',
          `<script>window.REDUX_STATE = ${JSON.stringify(store.getState())}</script>`
        )
    )
  })

app.listen(8001)
