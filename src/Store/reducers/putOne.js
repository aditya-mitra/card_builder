import { PUT_ONE } from '../actionTypes';

const initialState = '';

export default function (state = initialState, action) {
    switch (action.type) {
        case PUT_ONE:
            console.log('AT PUT ONE, we have the intial state as ', state, '\n and the action as ', action);
            const { cards, newCharacter } = action.payload;
            const newCards = cards.unshift(newCharacter);
            return { cards: newCards };
        default:
            return state;
    }
}