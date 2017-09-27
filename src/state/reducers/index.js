import { combineReducers } from 'redux';
import appReducer from './app.reducer';

const rootReducer = combineReducers({
  appState: appReducer,
});

export default rootReducer;
