import { Module } from '@cerebral/fluent';
import { HttpProviderError } from '@cerebral/http';
import { Signals, State } from './types';
import * as moduleSequences from './sequences';
import router from './router';
import read  from './modules/read';
import { signals as readSignals, state as readState } from './modules/read';

const state: State = {
  page: 'home',
  navbarMenuActive: false,
  locale: 'en',
  httpError: '',  
  read: readState,
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
