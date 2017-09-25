import { applyMiddleware, createStore } from 'redux';

import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

export default function() {
  const middleware = applyMiddleware(thunk);
  const store = createStore(rootReducer, {}, middleware);

  return store;
}
