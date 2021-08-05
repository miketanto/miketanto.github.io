import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';

import mainReducer from './mainReducer';


export default combineReducers({
  mainReducer,
  session: sessionReducer,
});