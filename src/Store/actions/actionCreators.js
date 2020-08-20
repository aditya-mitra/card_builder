import { GET_ALL, UPDATE_ONE } from '../actionTypes';
//import the apis

export function doGetAll() {
    return (dispatch, getState) => { // we are returning a function
        console.log('we have getState as', getState()); // notice getState is a function
        let num = 50 + getState().num; // be careful of the name of the variables inside the state 
        return dispatch({ type: GET_ALL, payload: num });
    }
}