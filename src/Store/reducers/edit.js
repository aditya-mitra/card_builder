import { EDIT } from '../actionTypes';

const initialState = { edit: false };

export default function (state = initialState, action) {
    switch (action.type) {
        case EDIT:
            const edit = { cid: action.payload }; // if edit !== false;
            return { ...state, edit };
        default:
            return state;
    }
}