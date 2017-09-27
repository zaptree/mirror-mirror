export default function configureStore() {
  let store;

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    store = require('./store.dev').default(); // eslint-disable-line
  } else {
    store = require('./store.prod').default(); // eslint-disable-line
  }

  return store;
}
