// @flow Created by 陈其丰 on 2018/9/29.

import React,{Component} from 'react';
import {TabBar,NavBar,NoticeBar,Popover} from 'antd-mobile';
import { withCookies, Cookies } from 'react-cookie';
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import PrivateRoute from '../privateRoute';
import Header from '../../component/header/index'
import Footer from './foot';
import MineIndex from './mine/index'
import StudyIndex from './study/index'
import TestIndex from './test/index'
import ReviewIndex from './review/index'
import './index.scss'

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
            console.log('match',match);
            return (
                <div className={match ? "active" : ""}>
                    {match ? "> " : ""}
                    <Link to={to}>{label}</Link>
                </div>
            )
        }}
    />
);

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            startTime:0,
            visible:false,
            selectedTab:''
        };
    }
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };
    onSelect = (opt) => {
        if(opt.props.value === 'start'){
            this.setState({
                visible:false,
                startTime:Date.now()
            })
        }else{
            let startTime = this.state.startTime;
            let now = Date.now();
            this.setState({
                visible:false,
                startTime:0
            });
            let time = now - startTime;

        }
    };
    render(){
        return (
            <div>
                {/*顶部导航*/}
                <Header title="记忆大师"/>
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    Nothing is impossible to a willing heart
                </NoticeBar>
                <div style={{paddingBottom:50}}>
                    <PrivateRoute path="/index/study" component={StudyIndex} />
                    <PrivateRoute path="/index/review" component={ReviewIndex} />
                    <PrivateRoute path="/index/test" component={TestIndex} />
                    <PrivateRoute path="/index/mine" component={MineIndex} />
                </div>

                <Footer/>
            </div>
        )
    }
}

export default withRouter(Index);