import { isEmpty as _isEmpty } from 'lodash';
import * as graphql from './graphql';

import { Context } from '../../../fluent';
import { Dictionary } from '@cerebral/fluent';
import { Language } from './types';

export function initPage ({ state }: Context) {
  console.log('@@@@@@@@@@@@@@@@');
  state.page = 'read';
  // const languages = state.read.languages;
  // console.log('LOADING DATA', languages.dehancer);
  // if (_isEmpty(languages)) {
  //   state.httpError = '';

  // }
  // // if (_isEmpty(languages) || _isEmpty(bibles) || _isEmpty(books)) {
  //   state.httpError = null;
  //   // HttpProviderError is handled by the root module
  //   return http.post('/graphql', { query: graphql.initData }).
  //     then(({ result: { data } }: LoadInitDataHttpResponse) => {
  //       state.set('httpError', null);
  //       const bibles = data.bibles.map(bible => {
  //         const books = bible.books.map((book: Book) => book.name);
  //         return { ...bible, books };
  //       });
  //       // TODO: module.set doesn't display value in the debugger
  //       state.set('app.languages', _sortBy(data.languages, ['label']));
  //       state.set('app.bibles', bibles);
  //       state.set('app.books', data.books);
  //     });
  // }

}
