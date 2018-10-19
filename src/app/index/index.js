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
import MineIndex from './mine/index'
import StudyIndex from './study/index'
import TestIndex from './test/index'
import ReviewIndex from './review/index'
import './index.scss'

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

                <footer className="index-footer">
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#00b500"
                        barTintColor="white"
                    >
                        <TabBar.Item
                            title="学习"
                            key="study"
                            icon={<i className="fa fa-book fa-2x"/>}
                            selectedIcon={<i className="fa fa-book fa-2x" style={{color:'#00b500'}}/> }
                            // badge={1}
                            selected={this.state.selectedTab === 'study'}
                            onPress={() => {
                                this.setState({selectedTab:'study'});
                                this.props.history.replace('/index/study')
                            }}
                            data-seed="logId"
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={<i className="fa fa-bell-o fa-2x"/>}
                            selectedIcon={<i className="fa fa-bell fa-2x" style={{color:'#00b500'}}/> }
                            title="复习"
                            key="Koubei"
                            // badge={'new'}
                            selected={this.state.selectedTab === 'review'}
                            onPress={() => {
                                this.setState({selectedTab:'review'});
                                this.props.history.replace('/index/review')
                            }}
                            data-seed="logId1"
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={<i className="fa fa-pencil-square fa-2x"/>}
                            selectedIcon={<i className="fa fa-pencil-square fa-2x" style={{color:'#00b500'}}/> }
                            title="测验"
                            key="test"
                            // dot
                            selected={this.state.selectedTab === 'test'}
                            onPress={() => {
                                this.setState({selectedTab:'test'});
                                this.props.history.replace('/index/test')
                            }}
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={<i className="fa fa-user fa-2x"/>}
                            selectedIcon={<i className="fa fa-user fa-2x" style={{color:'#00b500'}}/> }
                            title="我"
                            key="my"
                            selected={this.state.selectedTab === 'my'}
                            onPress={() => {
                                this.setState({selectedTab:'my'});
                                this.props.history.replace('/index/mine')
                            }}
                        >
                        </TabBar.Item>
                    </TabBar>
                </footer>
            </div>
        )
    }
}

export default withRouter(withCookies(Index));