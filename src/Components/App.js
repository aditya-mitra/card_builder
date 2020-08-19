import React from 'react';

//import { Provider } from 'react-redux';
//import store from './Store/store';

import NavBar from './NavBar';
import Main from './Main';
import SideBar from './hocs/SideBar';

function App() {
    return (
        //<Provider store={store}>
            //<div>
            <div >
                <NavBar />
                <br />
                <Main />

            </div>

        //</Provider>
        );
}

export default App;