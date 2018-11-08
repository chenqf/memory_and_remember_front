// @flow Created by 陈其丰 on 2018/10/26.

import React,{PureComponent,Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

@withRouter
class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        console.log('scroll componentDidUpdate');
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }
    render() {
        console.log('scroll render');
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


export {
    ScrollToTop, // 用于全局添加，每次切换页面的时候都会触发
    ScrollToTopOnMount // 用于单独使用，组合到组件中
}