// @flow Created by 陈其丰 on 2018/9/29.
import React,{Component} from 'react';
import http from '../library/http';
import auth from '../library/auth';
import { HashRouter as Router, Route, Link,Redirect } from "react-router-dom";

class PrivateRoute extends Component{
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
        let { component: Component, ...rest } = this.props;
        let {isCheck,isLogin} = this.state;
        debugger
        if(!isCheck){
            return null;
        }
        if(!isLogin){
            return (
                <Route {...rest}
                       render={ props =>
                           <Redirect
                               to={{
                                   pathname: "/user/login",
                                   state: { from: props.location }
                               }}
                           />
                       }
                />
            )
        }else{
            return (
                <Route {...rest}
                       render={ props =>
                           <Component {...props} />
                       }
                />
            )
        }
    }
}

export default PrivateRoute;