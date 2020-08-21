import { POST_ONE, GET_ONE, ERR } from '../actionTypes';

import { postOne, getOne } from '../../Services/apiCalls';

export default function doPostOne(inputs) {
    return async (dispatch, getState) => {
        const resPostOne = await postOne(inputs).catch(e => console.log(e, 'at 1'));
        const dataPostOne = resPostOne.data;

        if ('code' in dataPostOne && dataPostOne.code === '23505')
            return dispatch({ type: ERR, payload: "That Character already exists!" });
        else if ('code' in dataPostOne)
            return dispatch({ type: ERR, payload: "Oops! Something went wrong while submitting your Character." })

        const character_id = dataPostOne.character_id;
        console.log('got tha char id as', character_id, dataPostOne);

        if (character_id) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // needs at least 1 second to get the character
            console.log(character_id, 'is the character id');
            const resp = await getOne(character_id).catch('Please check your network connectivity!');
            const newCharacter = resp.data;
            console.log('got this', newCharacter);
            return dispatch({ type: POST_ONE, payload: { newCharacter, cards: getState().cards } });
        }else console.log('did not happen')

    }
}