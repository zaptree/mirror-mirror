import { applyMiddleware, compose, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

export default function() {
  const logger = createLogger({
    collapsed: true
  });
  const middleware = applyMiddleware(thunk, logger);
  const enhancer = compose(middleware);
  const store = createStore(rootReducer, {}, enhancer);

  return store;
}
