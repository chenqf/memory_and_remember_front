import React,{Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom";
import Hard from './hard/index'
import Word from './word/index'
import Statistics from './statistics/index'
import Audio from './audio/index'

const App = () => (
    <div>
        <Route exact path="/mine/hard" component={Hard} />
        <Route exact path="/mine/word" component={Word} />
        <Route exact path="/mine/statistics" component={Statistics} />
        <Route exact path="/mine/audio" component={Audio} />
    </div>

);


export default App;