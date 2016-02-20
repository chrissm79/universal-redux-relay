import React from 'react';
import Relay from 'react-relay';
import { RelayRouter } from 'react-router-relay';
import IsomorphicRelay from 'isomorphic-relay';
import IsomorphicRouter from 'isomorphic-relay-router';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { ReduxAsyncConnect } from 'redux-async-connect';
import routes from './routes';

export default function(store, providers, devComponent) {
  Relay.injectNetworkLayer(
    new Relay.DefaultNetworkLayer('http://localhost:8080/graphql')
  );

  IsomorphicRelay.injectPreparedData(window.__graphql);

  const root = (
    <IsomorphicRouter.Router
      routes={routes()}
      history={browserHistory}
      />
  );

  return Promise.resolve(root);
}
