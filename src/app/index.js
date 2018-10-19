import React,{Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import Auth from './auth';
import Login from './user/login/index';
import ErrorBoundary from './errorBoundary';
import 'react-fontawesome';
import '../library/http';




const App = () => (

        <Router>
            <ErrorBoundary>
                <Switch>
                    <Route exact path="/user/login" component={Login} />
                    <Redirect exact from="/" to="/index/study" />
                    {/*具有登录权限才可进入*/}
                    <Route path="/" component={Auth} />
                </Switch>
            </ErrorBoundary>
        </Router>

);


export default App;