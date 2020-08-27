import { EDIT } from '../actionTypes';

const initialState = false;

export default function (state = initialState, action) {
    switch (action.type) {
        case EDIT:
            return { card: action.payload }; // if edit !== false
        default:
            return state;
    }
}