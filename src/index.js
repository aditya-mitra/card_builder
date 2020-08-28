import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './Store/store';

import 'semantic-ui-css/semantic.min.css';

import App from './Containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
