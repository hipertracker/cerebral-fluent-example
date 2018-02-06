import * as sequences from './sequences';

import { Language, Signals, State } from './types';

import { Dictionary } from '@cerebral/fluent';
import { Module } from '@cerebral/fluent';

export const state: State = {
  languages: Dictionary<Language>({}),
};

export const signals: Signals = {
  ...sequences,
};

export default Module({
  state,
  signals,
});
