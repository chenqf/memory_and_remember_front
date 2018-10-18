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
import Index from './index/index';
import Login from './user/login/index';
import ErrorBoundary from './errorBoundary';
import 'react-fontawesome';
import '../library/http';




const App = () => (
    <CookiesProvider>
        <Router>
            <ErrorBoundary>
                <Switch>
                    <Redirect exact from="/" to="/index/study" />
                    <Route exact path="/user/login" component={Login} />
                    <Route path="/index" component={Index} />
                    <Route component={Index} />
                </Switch>
            </ErrorBoundary>
        </Router>
    </CookiesProvider>
);


export default App;