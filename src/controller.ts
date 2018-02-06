import { Controller } from '@cerebral/fluent';
import Devtools from 'cerebral/devtools';
import * as app from './app/index';

export default Controller(app.module, {
  devtools: Devtools({
    host: 'localhost:8686',
  }),
});
