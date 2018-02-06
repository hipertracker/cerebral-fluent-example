import { sequence } from '../../../fluent';
import * as actions from './actions';

export const routed = sequence(s => s.action(actions.initPage),
);
