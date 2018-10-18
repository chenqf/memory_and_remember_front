// @flow Created by 陈其丰 on 2018/9/29.

import React,{Component} from 'react';
import { withCookies, Cookies } from 'react-cookie';
import http from '../../library/http';
import auth from '../../library/auth';
import Home from './home';
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

class Index extends Component{
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
            console.log('index check 正常态')
            auth.changeCheck(true);
            auth.changeLogin(true);
            this.setState({
                isCheck:true,
                isLogin:true,
            })
        }).catch((err)=>{
            console.log('index check 异常态')
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
            console.log('check not login ', this.props.location);
            return (
                <Redirect
                    to={{
                        pathname: "/user/login",
                        state: { from: this.props.location }
                    }}
                />
            )
        }
        console.log('check is login ', this.props.location);
        return <Home/>
    }
}

export default withCookies(Index);