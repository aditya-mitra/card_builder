import { UPDATE_SELECTION, CLEAR_SEARCH } from '../actionTypes';

export function doFilterCards(items) {
    return (dispatch, getState) => {
        dispatch({ type: UPDATE_SELECTION, payload: items });
    }
}

export function doClearSearch() {
    return (dispatch, getState) => {
        dispatch({ type: CLEAR_SEARCH });
    }
}