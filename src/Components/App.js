import React from 'react';

//import { Provider } from 'react-redux';
//import store from './Store/store';

import NavBar from './NavBar';
import Main from './Main';

function App() {
    return (
        //<Provider store={store}>
            //<div>
            <div>
                rendering from app.js
                <br />
                <NavBar />
                <br />
                <Main />

            </div>

        //</Provider>
        );
}

export default App;