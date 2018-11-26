import React,{Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom";
import {view as Word} from './word/index'
import {view as Hard} from './hard/index'
import Statistics from './statistics/index'
import Audio from './audio/index'

const Mine = () => (
    <React.Fragment>
        <Route exact path="/mine/hard" component={Hard} />
        <Route exact path="/mine/word" component={Word} />
        <Route exact path="/mine/statistics" component={Statistics} />
        <Route exact path="/mine/audio" component={Audio} />
    </React.Fragment>

);


export default Mine;