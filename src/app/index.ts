import { Module } from '@cerebral/fluent';
import { HttpProviderError } from '@cerebral/http';
import read from './modules/read';
import router from './router';
import * as moduleSequences from './sequences';
import { Signals, State } from './types';

const state: State = {
  page: 'home',
  navbarMenuActive: false,
  locale: 'en',
  httpError: '',
};

const signals: Signals = {
  ...moduleSequences,
};

export const module = Module({
  state,
  signals,
  modules: {
    router,
    read,
  },
  catch: [
    [HttpProviderError, moduleSequences.httpErrorCaptured],
  ],
});
