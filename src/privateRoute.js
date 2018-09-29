// @flow Created by 陈其丰 on 2018/9/29.
import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";

let flg = true;
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            flg ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

export default PrivateRoute;