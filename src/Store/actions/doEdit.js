import { EDIT } from '../actionTypes';

export default function doEdit(card) {
    return (dispatch, getState) => {
        let { abilities } = card;
        abilities = abilities.join(',');
        card = { ...card, abilities };
        dispatch({ type: EDIT, payload: card });
    }
}