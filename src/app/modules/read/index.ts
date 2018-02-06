import { Dictionary, Module } from '@cerebral/fluent';
import * as sequences from './sequences';
import { Language, Signals, State } from './types';

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
