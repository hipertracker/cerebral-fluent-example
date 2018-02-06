import { isEmpty as _isEmpty } from 'lodash';
import * as graphql from './graphql';

import { Context } from '../../../fluent';
import { Dictionary } from '@cerebral/fluent';
import { Language } from './types';

export function initPage ({ state }: Context) {
  state.page = 'read';
}
