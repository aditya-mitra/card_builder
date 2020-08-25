import { combineReducers } from 'redux';

import getAll from './getAll';
import putOne from './putOne';
import updateOne from './updateOne';
import edit from './edit';

const rootReducer = combineReducers({ cards: getAll, putOne, updateOne, edit }); // getAll is the name of the reducer and we are changing it's name to num

export default rootReducer;