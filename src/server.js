import React from 'react';
import Relay from 'react-relay';
import RouterContext from 'react-router/lib/RouterContext';
import IsomorphicRouter from 'isomorphic-relay-router';
import { Provider } from 'react-redux';
import { ReduxAsyncConnect, loadOnServer } from 'redux-async-connect';

export default function(store, renderProps) {
  return new Promise((resolve, reject) => {
    Relay.injectNetworkLayer(
      new Relay.DefaultNetworkLayer('http://localhost:8080/graphql')
    );

    IsomorphicRouter.prepareData(renderProps).then(render);

    function render({data, props}) {
      const root = (
        <IsomorphicRouter.RouterContext {...props} />
      );

      resolve({
        data,
        root
      });
    }
  });
}
