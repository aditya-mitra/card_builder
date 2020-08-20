import React from 'react';

//import { Provider } from 'react-redux';
//import store from './Store/store';

import NavBar from './NavBar';
import Main from './Main';
import Form from './hocs/Form';

// DO NOT USE THE STORE HERE
// USE ANOTHER FILE - StoreConnector.js

function App(props) {
    return (
        //<Provider store={store}>
            //<div>
            <div >
            <NavBar {...props}/>
                <Main />

            </div>

        //</Provider>
        );
}

export default Form(App);