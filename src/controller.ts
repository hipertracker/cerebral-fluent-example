import Devtools from 'cerebral/devtools';
import { Controller } from '@cerebral/fluent';
import * as app from './app/index';

export default Controller(app.module, {
  devtools: Devtools({
    host: 'localhost:8686',
  }),
});