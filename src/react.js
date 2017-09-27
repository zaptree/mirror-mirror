import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import configureStore from './state/store';

import './assests/sass/main.scss';

const store = configureStore();

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  );
}
render(App);
