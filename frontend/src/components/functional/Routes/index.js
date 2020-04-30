import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { redirects } from '../../../data/redirects';
import { routes } from '../../../data/routes';
import InternationalisationProvider from '../InternationalisationProvider';

class Routes extends Component {
  render() {
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') window.location.href = `http://127.0.0.1:1234${window.location.pathname}`;

    return (
      <Switch>
        {
          redirects.map(route => (
            <Route key={route.path} path={route.path} exact={route.exact} component={({match, location, staticContext}) => {
              if (staticContext) {
                staticContext.status = route.status;
              }
              
              return (
                <Redirect to={route.to({match, location, staticContext})} />
              );
            }} />
          ))
        }
        {
          routes.map(route => {
            const RouteComponent = route.component;
            return (
              <Route key={route.path} path={route.path} exact={route.exact} component={({ match, location, staticContext }) => {
                if (staticContext) {
                  staticContext.status = route.status;
                }

                return (
                  <InternationalisationProvider match={match} location={location}>
                    <RouteComponent match={match} location={location} staticContext={staticContext} />
                  </InternationalisationProvider>
                );
              }} />
            )
          })
        }
      </Switch>
    )
  }
}

export { Routes };

