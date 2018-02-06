import { Dictionary, Module } from '@cerebral/fluent';
import * as signals from './sequences';

export type Language = {
  name: string;
  label: string;
};

export type State = {
  languages: Dictionary<Language>;
};

export type Signals = {
  [key in keyof typeof signals]: typeof signals[key]
};
