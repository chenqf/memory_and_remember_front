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
import Auth from './auth';
import Login from './user/login/index';
import ErrorBoundary from './errorBoundary';
import Scroll from '../component/scroll/index';
import {Modal} from 'antd-mobile';
import 'react-fontawesome';
import '../library/http';

const supportsHistory = 'pushState' in window.history
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
            forceRefresh={true || !supportsHistory}
            getUserConfirmation={getConfirmation} // 切换页面时，提示是否切换
        >
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