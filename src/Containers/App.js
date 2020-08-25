import React from 'react';

import NavBar from './NavBar';
import Main from './Main';
import PageDimmer from './hocs/PageDimmer';

function App(props) {
    //store.dispatch({ type: 'GET ALL', payload: 200 });
    return (
        <div >
            <NavBar {...props} />
            <Main {...props}/>
        </div>
    );
}

export default PageDimmer(App);