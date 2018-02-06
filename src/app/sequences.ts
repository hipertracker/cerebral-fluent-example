import { sequence, sequenceWithProps } from '../fluent';
import * as actions from './actions';

export const homeRouted = sequence(s => s.action(actions.activateteHomePage),
);

export const searchRouted = sequence(s => s.action(actions.activateSearchPage),
);

export const readRouted = sequence(s => s.action(actions.activateteReadPage),
);

export const helpRouted = sequence(s => s.action(actions.activateteHelpPage),
);

export const historyRouted = sequence(
  s => s.action(actions.activateteHistoryPage),
);

export const configRouted = sequence(
  s => s.action(actions.activateteConfigPage),
);

export const navburgerClicked = sequence(
  s => s.action(actions.toggleNavbarMenu),
);

export const localeChanged = sequenceWithProps<{ locale: string }>(
  s => s.action(actions.changeLocale),
);

export const httpErrorCaptured = sequenceWithProps<{ error: string }>(
  s => s.action(actions.handleHttpError),
);
