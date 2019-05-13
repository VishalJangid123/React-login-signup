import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signup from '../src/Components/Signup/Signup';
import Login from '../src/Components/Login/Login';
import Dashboard from '../src/Components/Dashboard/Dashboard';
import { Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import history from './Components/history';

ReactDOM.render(
    <Router history={history}>
    <div>
        <Route exact path='/' component={App} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/dashboard' component={Dashboard} />
    </div>
</Router >
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
