import * as readSignals from './modules/read/sequences';
import * as signals from './sequences';

import { Signals as ReadSignals, State as ReadState } from './modules/read/types';

export type ModuleState = {
  page: string,
  navbarMenuActive: boolean,
  locale: string,
  httpError?: string,
};

export type State = ModuleState & {
  read: ReadState,
};

export type ModuleSignals = {
  [key in keyof typeof signals]: typeof signals[key]
};

export type Signals = ModuleSignals & {
  read: {
    routed: typeof readSignals.routed,
  },
};
