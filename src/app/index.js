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
import Login from './user/login/index'
import PrivateRoute from './privateRoute';
import ErrorBoundary from './errorBoundary';
import '../library/http';




const App = () => (
    <CookiesProvider>
        <Router>
            <ErrorBoundary>
                <Route exact path="/user/login" component={Login} />
                {/*<Redirect exact from="/" to="/index/study" />*/}
                <Route path="/index" component={Index} />
            </ErrorBoundary>
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