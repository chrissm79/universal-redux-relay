import { express, renderer, start } from 'universal-redux';
import config from '../config/universal-redux.config.js';

const APP_PORT = 3000;
const app = express(config);

// app.use(someMiddleware);
// app.use(someOtherMiddleware);

app.use(renderer(config));
start(app, config);
