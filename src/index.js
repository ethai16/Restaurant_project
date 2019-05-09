import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from './App';
import Home from './views/Home'
import Restaurants from './views/Restaurants'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path = "/home" component = {Home}/>
                <Route exact path = "/restaurants" component = {Restaurants}/>
                <Route path = "/restaurants/:pageNumber" component = {Restaurants}/>
            
            </Switch>
        </App>
    </BrowserRouter>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
