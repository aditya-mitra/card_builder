import { GET_ALL, UPDATE_ONE } from '../actionTypes';

import * as apicalls from '../../Services/apiCalls';

export function doGetAll() {
    return (dispatch, getState) => { // we are returning a function
        console.log('we have getState as', getState()); // notice getState is a function
        //let num = 50 + getState().num; // be careful of the name of the variables inside the state 
        apicalls.getAll()
            .then(response => response.data)
            .then(data => dispatch({ type: GET_ALL, payload: data }))
            .catch(e => console.log(e));

    }
}