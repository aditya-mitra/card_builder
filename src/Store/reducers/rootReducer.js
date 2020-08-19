import { combineReducers } from 'redux';

import askStories from './askStories';
import topStories from './topStories';

const rootReducer = combineReducers({ askStories, topStories });

export default rootReducer;