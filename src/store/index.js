import { createStore, applyMiddleware, compose } from 'redux';
import { sessionService } from 'redux-react-session';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

const options = { refreshOnCheckAuth: true, redirectPath: '/home', driver: 'COOKIES'};
 
sessionService.initSessionService(store, options)
  .then(() => console.log('Redux React Session is ready and a session was refreshed from your storage'))
  .catch(() => console.log('Redux React Session is ready and there is no session in your storage'));

export default store;