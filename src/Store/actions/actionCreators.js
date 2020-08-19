import { ASK_STORIES, TOP_STORIES } from '../actionTypes';
import { askStories, topStories } from '../../Services/APIcalls';



export function doAskStories() {
    return (dispatch, getState) => { // this has to be a function. Otherwise, redux-thunk will not work
        askStories()
            .then(stories => dispatch({ type: ASK_STORIES, payload: stories }))
            .catch(error => console.log(error));
    }
};

export function doTopStories() {

    return (dispatch, getState) => {
        topStories()
            .then(stories => dispatch({ type: TOP_STORIES, payload: stories }))
            .catch(error => console.log(error));
    }
};