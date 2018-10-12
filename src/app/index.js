import React,{Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import Index from './index/index'
import Login from './user/login'
import PrivateRoute from './privateRoute';
import '../library/http';




const App = () => (
    <CookiesProvider>
        <Router>
            <div>
                <Route exact path="/login" component={Login} />
                <PrivateRoute path="/" component={Index} />
            </div>
        </Router>
    </CookiesProvider>
);

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const AuthButton = withRouter(
    ({ history }) =>
        fakeAuth.isAuthenticated ? (
            <p>
                Welcome!{" "}
                <button
                    onClick={() => {
                        fakeAuth.signout(() => history.push("/"));
                    }}
                >
                    Sign out
                </button>
            </p>
        ) : (
            <p>You are not logged in.</p>
        )
);


export default App;