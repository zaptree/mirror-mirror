import appReducer from './app.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  appState: appReducer
});

export default rootReducer;
