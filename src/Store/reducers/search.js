import { UPDATE_SELECTION, CLEAR_SEARCH } from '../actionTypes';

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_SELECTION:
            const items = action.payload;
            return items;
        case CLEAR_SEARCH:
            return [];
        default:
            return state;
    }
}