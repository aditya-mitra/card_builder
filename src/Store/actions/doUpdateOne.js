import { UPDATE_ONE } from '../actionTypes';

// produce an updated cards action payload

export default function doUpdateOne(cid, updates) {
    return (dispatch, getState) => {
        const cards = getState().cards;
        let updatedCards = [];
        for (const card of cards) {
            if (card.id === cid) {
                let updatedCard = {
                    ...updates,
                    id: cid,
                }
                updatedCards.push(updatedCard);
            } else {
                updatedCards.push(card);
            }
        }
        dispatch({ type: UPDATE_ONE, payload: updatedCards });
    }
}