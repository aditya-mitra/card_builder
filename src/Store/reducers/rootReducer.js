import { combineReducers } from 'redux';

import getAll from './getAll';
import putOne from './putOne';

const rootReducer = combineReducers({ cards: getAll, putOne }); // getAll is the name of the reducer and we are changing it's name to num

export default rootReducer;