// @flow Created by 陈其丰 on 2018/10/26.

import React,{PureComponent,Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }
    render() {
        return this.props.children;
    }
}

class ScrollToTopOnMount extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return null;
    }
}

export default {
    ScrollToTop:withRouter(ScrollToTop), // 用于全局添加，每次切换页面的时候都会触发
    ScrollToTopOnMount:ScrollToTopOnMount // 用于单独使用，组合到组件中
}