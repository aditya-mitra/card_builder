import { EDIT } from '../actionTypes';

export default function doEdit(card) {
    return (dispatch, getState) => {
        dispatch({ type: EDIT, payload: card });
    }
}