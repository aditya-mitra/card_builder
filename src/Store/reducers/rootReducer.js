import { combineReducers } from 'redux';

import cards from './cards'; // both updated and new cards are put here, otherwise update anywhere else will not reflect a change
import edit from './edit';
import filteredCards from './search';

const rootReducer = combineReducers({ cards, edit, filteredCards }); // cards is the name of the reducer which has the value as cards array

export default rootReducer;