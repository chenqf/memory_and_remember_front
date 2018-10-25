// @flow Created by 陈其丰 on 2018/10/25.
import React,{PureComponent,Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom";
function NoMatch(props){
    return (
        <Redirect to="/"/>
    );
}
export default NoMatch;