import express from 'express';
import graphQLHTTP from 'express-graphql';
import cors from 'cors';
import path from 'path';
import {schema} from '../src/data/schema';

const APP_PORT = 8080;

var app = express();

app.use(cors());
app.use('/graphql', graphQLHTTP((request) => {
  // console.log('graphql.request');
  return {
    schema,
    pretty: true
  };
}));

app.listen(APP_PORT, () => {
  console.log('GraphQL is listening on http://localhost:' + APP_PORT);
});
