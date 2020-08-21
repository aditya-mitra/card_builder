import { GET_ALL } from '../actionTypes';

const initialState = []; // acts as placeholder

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL:
            console.log('we have the intial state as ', state,'\n and the action as ',action);
            const newState = action.payload;
            return newState;
        default:
            return state;
    }
}