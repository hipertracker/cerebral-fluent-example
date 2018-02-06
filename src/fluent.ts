import {
  ConnectFactory,
  IBranchContext,
  IContext,
  SequenceFactory,
  SequenceWithPropsFactory,
} from '@cerebral/fluent';

import { Signals, State } from './app/types';

export interface Context<Props = {}> extends IContext<Props> {
  state: State;
}

export interface BranchContext<Paths, Props = {}> extends IBranchContext<Paths, Props> {
  state: State;
}

export const connect = ConnectFactory<State, Signals>();

export const sequence = SequenceFactory<Context>();

export const sequenceWithProps = SequenceWithPropsFactory<Context>();
