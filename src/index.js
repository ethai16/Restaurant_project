import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from './App';
import Home from './views/Home'
import Restaurants from './views/Restaurants'
import locationReducer from './redux/reducers/locationReducer'

import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <Provider store = {createStore(
        locationReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path = "/home" component = {Home}/>
                <Route path = "/restaurants" component = {Restaurants}/>
            </Switch>
        </App>
    </BrowserRouter>
    </Provider>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
