// @flow Created by 陈其丰 on 2018/9/29.

import React,{Component} from 'react';
import {NoticeBar} from 'antd-mobile';
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import AsyncLoad from '../../library/asyncLoad';
import PrivateRoute from '../privateRoute';
import withHeader from '../../hot/withHeader'
import Footer from './foot';
import './index.scss'

const StudyIndex = AsyncLoad(() => import("./study/index"));
const TestIndex = AsyncLoad(() => import("./test/index"));
const MineIndex = AsyncLoad(() => import("./mine/index"));
const ReviewIndex = AsyncLoad(() => import("./review/index"));

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

export default withRouter(withHeader()(Index));