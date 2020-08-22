import { GET_ALL } from '../actionTypes';

const initialState = []; // acts as placeholder

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL:
            const newState = action.payload;
            return newState;
        default:
            return state;
    }
}