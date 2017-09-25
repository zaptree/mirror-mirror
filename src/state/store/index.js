export default function configureStore() {
  let store;

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    store = require('./store.dev').default();
  } else {
    store = require('./store.prod').default();
  }

  return store;
}
