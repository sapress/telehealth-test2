import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App/pages/App';
import reducers from './App/reducers';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

// enable chrome extension to help us with redux forms
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk))); // middleware = reduxthunk

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch />
        </BrowserRouter>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
