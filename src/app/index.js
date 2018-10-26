import React,{Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom";
import Auth from './auth';
import Login from './user/login/index';
import ErrorBoundary from './errorBoundary';
import Scroll from '../component/scroll/index';
import 'react-fontawesome';
import '../library/http';

const App = () => (

        <Router>
            <Scroll.ScrollToTop>
            <ErrorBoundary>
                <Switch>
                    {/*登录页面*/}
                    <Route exact path="/user/login" component={Login} />
                    {/*默认首页为学习页面*/}
                    <Redirect exact from="/" to="/index/study" />
                    {/*具有登录权限才可进入*/}
                    <Route path="/" component={Auth} />
                </Switch>
            </ErrorBoundary>
            </Scroll.ScrollToTop>
        </Router>
);


export default App;