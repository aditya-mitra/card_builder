import { UPDATE_ONE } from '../actionTypes';

const initialState = '';

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_ONE:
            console.log('AT UPDATE ONE, we have the intial state as ', state, '\n and the action as ', action);
            const updatedCards = action.payload.updatedCards;
            const edit = false;
            return { cards: updatedCards, edit };
        default:
            return state;
    }
}