import * as signals from './sequences';

export type ModuleState = {
  page: string,
  navbarMenuActive: boolean,
  locale: string,
  httpError?: string,
};

export type State = ModuleState;

export type ModuleSignals = {
  [key in keyof typeof signals]: typeof signals[key]
  };

export type Signals = ModuleSignals;
