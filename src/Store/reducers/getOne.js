import { GET_ONE } from '../actionTypes';

const initialState = ''; // acts as placeholder

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ONE:
            console.log('at getone, we have the intial state as ', state, '\n and the action as ', action);
            const { cards, newCard } = action.payload;
            const newState = cards.unshift(newCard);
            return newState;
        default:
            return state;
    }
}