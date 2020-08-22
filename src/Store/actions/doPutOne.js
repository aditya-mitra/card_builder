import { PUT_ONE } from '../actionTypes';

import { getOne } from '../../Services/apiCalls';

export default function doPutOne(cid) {
    return async (dispatch, getState) => {
        getOne(cid)
            .then(response => response.data)
            .then(data => dispatch({ type: PUT_ONE, payload: { cards: getState().cards, newCharacter: data[0] } }))
            .catch(error => console.log(error, 'while retreiving that card'));
    }
}