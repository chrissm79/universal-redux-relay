import React from 'react';
import Relay from 'react-relay';
import { RelayRouter } from 'react-router-relay';
import IsomorphicRelay from 'isomorphic-relay';
import IsomorphicRouter from 'isomorphic-relay-router';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { ReduxAsyncConnect } from 'redux-async-connect';
import getRoutes from 'universal-redux/routes';

export default function(store, providers, devComponent) {
  Relay.injectNetworkLayer(
    new Relay.DefaultNetworkLayer('http://localhost:8080/graphql')
  );

  IsomorphicRelay.injectPreparedData(window.__graphql);

  const root = (
    <Provider store={store}>
      <div>
        <IsomorphicRouter.Router
          routes={getRoutes(store)}
          history={browserHistory}
          render={(props) => <ReduxAsyncConnect {...props} />}
          />
      </div>
    </Provider>
  );

  return Promise.resolve(root);
}
