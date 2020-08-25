import React from 'react';

import NavBar from './NavBar';
import Main from './Main';
import Form from './hocs/PageDimmer';

function App(props) {
    //store.dispatch({ type: 'GET ALL', payload: 200 });
    return (
        <div >
            <NavBar {...props} />
            <Main />
        </div>
    );
}

export default Form(App);