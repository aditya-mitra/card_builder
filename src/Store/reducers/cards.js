import { GET_ALL, UPDATE_ONE, PUT_ONE } from '../actionTypes';

const initialState = []; // acts as placeholder

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL:
            const newState = action.payload;
            return newState;
        case UPDATE_ONE:
            const updatedCards = action.payload;
            return updatedCards;
        case PUT_ONE:
            const { cards, newCharacter } = action.payload;
            let newCards = [...cards]; // do not modify the original state
            newCards.unshift(newCharacter);
            return newCards;
        default:
            return state;
    }
}