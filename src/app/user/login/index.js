// @flow Created by 陈其丰 on 2018/9/29.
import React,{Component} from 'react';
import {WingBlank,WhiteSpace ,Button,Toast,TabBar,NavBar} from 'antd-mobile';
import withHeader from '../../../hot/withHeader';
import http from '../../../library/http';
import auth from '../../../library/auth';
import './index.scss';


import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

@withHeader('登录')
export default class extends Component{
    constructor(props){
        super(props);
        let isLogin = auth.isLogin;
        this.state = {
            isLogin,
            name:'',
            password:''
        }
    }
    submit(){
        let {name,password} = this.state;
        if(!name || !password){
            return ;
        }
        http.post('/user/login',{name,password}).then(()=>{
            Toast.success('登录成功', 2, ()=>{});
            auth.changeLogin(true);
            this.setState({ isLogin: true });
        }).catch(()=>{})
    }
    inputChange(event){
        let el = event.target,
            name = el.name,
            value = el.value;
        this.setState({
            [name]:value
        })
    }
    render(){
        const { isLogin } = this.state;
        const {from} = this.props.location.state || {from:{pathname:"/index/study"}};

        if(isLogin){
            return <Redirect to={from} />;
        }
        return (
            <div className="login-page">
                <WingBlank>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    {/*用于组织默认填充---start*/}
                    <input type="password" style={{position: 'absolute', top: '-999px'}}/>
                    {/*用于组织默认填充---end*/}
                    <div className="username-page">
                        <input value={this.state.name} onChange={this.inputChange.bind(this)} id="name" name="name" placeholder="您的用户名"/>
                    </div>
                    <div className="password-page">
                        <input value={this.state.password} onChange={this.inputChange.bind(this)} id="password" name="password" type="password" placeholder="您的密码"/>
                    </div>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <Button type="primary" className={this.state.name && this.state.password ? '' : 'opacity-5'} onClick={this.submit.bind(this)}>开始旅程</Button>
                </WingBlank>
            </div>
        )
    }
};