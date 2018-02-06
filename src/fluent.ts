import { ConnectFactory, IBranchContext, IContext, SequenceFactory, SequenceWithPropsFactory } from '@cerebral/fluent';

import * as read from './app/modules/read/types';
import * as app from './app/types';

type State = app.State & {
  read: read.State,
};

type Signals = app.Signals & {
  read: read.Signals,
};

export interface Context<Props = {}> extends IContext<Props> {
  state: State;
}

export interface BranchContext<Paths, Props = {}> extends IBranchContext<Paths, Props> {
  state: State;
}

export const connect = ConnectFactory<State, Signals>();

export const sequence = SequenceFactory<Context>();

export const sequenceWithProps = SequenceWithPropsFactory<Context>();
