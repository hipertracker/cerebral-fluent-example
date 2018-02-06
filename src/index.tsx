import { Container } from '@cerebral/fluent';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import controller from './controller';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Container controller={controller}>
    <App/>
  </Container>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
