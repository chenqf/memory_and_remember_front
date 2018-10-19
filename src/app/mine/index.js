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

const App = () => (
    <div>
        <Route exact path="/mine/hard" component={Hard} />
        <Route exact path="/mine/word" component={Word} />
    </div>

);


export default App;