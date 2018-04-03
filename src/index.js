import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import store from './store/store';
import MyRouter from './router';

import "../node_modules/font-awesome/css/font-awesome.min.css";
import 'react-table/react-table.css'
import "./styles/main.css";

const App = (
    <Provider store={store}>
            <MyRouter />
    </Provider>
);
ReactDOM.render( App, document.getElementById('root') );
registerServiceWorker();
