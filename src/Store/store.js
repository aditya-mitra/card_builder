import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers/rootReducer';

//const additions = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // not working if REDUX_DEVTOOLS not present
const additions = compose(applyMiddleware(thunk));

const defaultState = {  };

const store = createStore(reducer, defaultState, additions);

export default store;