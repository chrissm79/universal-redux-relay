import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Head from './Head';
import Body from './Body';

export default ({assets, store, headers, component}) => {
  return (
    <html lang="en-us">
      <Head assets={assets} store={store} headers={headers} />
      <Body assets={assets} store={store} headers={headers} component={component.root} graphql={component.data} />
    </html>
  )
}
