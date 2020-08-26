import { combineReducers } from 'redux';

import cards from './cards'; // both updated and new cards are put here, otherwise update anywhere else will not reflect a change
import edit from './edit';

const rootReducer = combineReducers({ cards, edit }); // getAll is the name of the reducer and we are changing it's name to num

export default rootReducer;