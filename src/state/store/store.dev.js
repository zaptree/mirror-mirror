import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger'; // eslint-disable-line
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

export default function () {
  const logger = createLogger({
    collapsed: true,
  });
  const middleware = applyMiddleware(thunk, logger);
  const enhancer = compose(middleware);
  const store = createStore(rootReducer, {}, enhancer);

  return store;
}
