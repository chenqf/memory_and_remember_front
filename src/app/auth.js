// @flow Created by 陈其丰 on 2018/9/29.

import React,{Component} from 'react';
import Index from './index/index';
import Mine from './mine/index';
import NoMatch from './noMatch';
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    withRouter
} from "react-router-dom";

export default ()=> {
    return (
        <Switch>
            <Route path="/index" component={Index} />
            <Route path="/mine" component={Mine} />
            {/*默认首页为学习页面*/}
            <Redirect from="/" to="/index/study" />
            {/*404页面*/}
            <Route component={NoMatch} />
        </Switch>
    )
}
