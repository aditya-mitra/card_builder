import { getAll, getOne } from '../../Services/apiCalls';
import { GET_ALL, PUT_ONE, UPDATE_ONE } from '../actionTypes';

// getting all the cards

export function doGetAll() {
    return (dispatch, getState) => { // we are returning a function
        console.log('we have getState as', getState());
        // notice getState is a function. let num = 50 + getState().num
        getAll()
            .then(response => response.data)
            .then(data => dispatch({ type: GET_ALL, payload: data }))
            .catch(e => console.log(e));
    }
}

// putting a new card

export function doPutOne(cid) {
    return async (dispatch, getState) => {
        getOne(cid)
            .then(response => response.data)
            .then(data => dispatch({ type: PUT_ONE, payload: { cards: getState().cards, newCharacter: data[0] } }))
            .catch(error => console.log(error, '\nThat card does not exist'));
    }
}

// produce an updated cards action payload

export function doUpdateOne(cid, updates) {
    return (dispatch, getState) => {
        const cards = getState().cards;
        let updatedCards = [];
        console.info('The updated Card is', updates);
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

