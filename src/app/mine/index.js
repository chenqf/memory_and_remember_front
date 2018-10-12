// @flow Created by 陈其丰 on 2018/9/29.
import React,{Component} from 'react';
import {WingBlank,WhiteSpace ,Button,Toast} from 'antd-mobile';
import http from '../../library/http';
import './index.css';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    submit(){
        let user = document.getElementById('username').value,
            password = document.getElementById('password').value;
        http.post('/user/login',{name:user,password},()=>{
            Toast.success('登录成功', 2, ()=>{})
        })
    }
    render(){
        return (
            <WingBlank>
                <WhiteSpace/>
                <div className="login">
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <div className="login-item">
                        <span>用户名</span>
                        <input id="username" placeholder="您的用户名"/>
                    </div>
                    <div className="login-item">
                        <span>密码</span>
                        <input id="password" type="password" placeholder="您的密码"/>
                    </div>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <Button  type="primary" onClick={this.submit.bind(this)}>登录</Button><WhiteSpace />
                </div>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
            </WingBlank>
        )
    }
}
export default Login;