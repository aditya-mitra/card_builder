import { POST_ONE } from '../actionTypes';

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case POST_ONE: console.log('reached postone', action, state);
            return state;
            break;
        default:
            return state;
    }
}