import { EDIT } from '../actionTypes';

export default function doEdit(cid) {
    return (dispatch, getState) => {
        dispatch({ type: EDIT, payload: cid });
    }
}