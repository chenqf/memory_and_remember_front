import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    // HashRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom";
import PrivateRoute from './privateRoute';
import Auth from './auth';
import Login from './user/login/index';
import ErrorBoundary from './errorBoundary';
import {ScrollToTop} from '../component/scroll/index';
import {Modal} from 'antd-mobile';
import withTime from '../hot/withTime';
import 'react-fontawesome';
import '@http';
import '../hot/index.scss'

const supportsHistory = 'pushState' in window.history;
const getConfirmation = (message, callback) => {
    Modal.alert('提示', message, [
        { text: 'Cancel', onPress: () => {
            callback(false)
        }, style: 'default' },
        { text: 'OK', onPress: () => {
            callback(true)
        } },
    ]);
};



const App = () => (
        <Router
            forceRefresh={!supportsHistory}
            getUserConfirmation={getConfirmation} // 切换页面时，提示是否切换
        >
            <ScrollToTop>
                <ErrorBoundary>
                    <Switch>
                        {/*登录页面*/}
                        <Route exact path="/user/login" component={Login} />
                        {/*具有登录权限才可进入*/}
                        <PrivateRoute path="/" component={Auth} />
                    </Switch>
                </ErrorBoundary>
            </ScrollToTop>
        </Router>
);


export default withTime()(App);