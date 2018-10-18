// @flow Created by 陈其丰 on 2018/9/29.
import React,{Component} from 'react';
import auth from '../library/auth';
import { HashRouter as Router, Route, Link,Redirect } from "react-router-dom";

class PrivateRoute extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let { component: Component, ...rest } = this.props;
        let {isLogin} = auth;
        console.log('private router 中 auth 中的 isLogin： ' + isLogin);
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