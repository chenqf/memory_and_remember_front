// @flow Created by 陈其丰 on 2018/9/29.

import React,{Component} from 'react';
import http from '../library/http';
import auth from '../library/auth';
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

class Auth extends Component{
    constructor(props){
        super(props);
        this.state = {
            isCheck:auth.isCheck,
            isLogin:auth.isLogin
        };
    }
    componentWillMount(){
        if(auth.isCheck){
            return ;
        }
        http.post('/user/check').then((data)=>{
            auth.changeCheck(true);
            auth.changeLogin(true);
            this.setState({
                isCheck:true,
                isLogin:true,
            })
        }).catch((err)=>{
            auth.changeCheck(true);
            auth.changeLogin(false);
            this.setState({
                isCheck:true,
                isLogin:false,
            })
        });
    }
    render(){
        let {isCheck,isLogin} = this.state;
        if(!isCheck){
            return null;
        }
        if(!isLogin){
            return (
                <Redirect
                    to={{
                        pathname: "/user/login",
                        state: { from: this.props.location }
                    }}
                />
            )
        }
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/index" component={Index} />
                    <Route path="/mine" component={Mine} />
                    <Route component={NoMatch} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default Auth;