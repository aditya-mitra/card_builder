import React from 'react';
import { Provider } from 'react-redux';

import NavBar from './NavBar';
import Main from './Main';
import Form from './hocs/PageDimmer';

import store from '../Store/store';


function App(props) {
    //store.dispatch({ type: 'GET ALL', payload: 200 });
    return (
        <Provider store={store}>
            <div >
                <NavBar {...props}/>
                <Main />
            </div>
        </Provider>
        );
}

export default Form(App);