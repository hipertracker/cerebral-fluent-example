import { Context } from '../fluent';

export function activateteHomePage ({ state }: Context) {
  state.page = 'home';
}

export function activateSearchPage ({ state }: Context) {
  state.page = 'search';
}

export function activateteReadPage ({ state }: Context) {
  state.page = 'read';
}

export function activateteHelpPage ({ state }: Context) {
  state.page = 'help';
}

export function activateteHistoryPage ({ state }: Context) {
  state.page = 'history';
}

export function activateteConfigPage ({ state }: Context) {
  state.page = 'config';
}

export function toggleNavbarMenu ({ state }: Context) {
  state.navbarMenuActive = !state.navbarMenuActive;
}

export function changeLocale ({ props, state }: Context<{ locale: string }>) {
  state.locale = props.locale;
}

export function handleHttpError ({ props, state }: Context<{ error: string }>) {
  state.httpError = props.error;
} 
