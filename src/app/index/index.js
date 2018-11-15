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
import withHeader from '../../hot/withHeader'
import Footer from './foot';
import './index.scss'

const StudyIndex = AsyncLoad(() => import("./study/container"));
const ExamIndex = AsyncLoad(() => import("./exam/container"));
const MineIndex = AsyncLoad(() => import("./mine/index"));
const ReviewIndex = AsyncLoad(() => import("./review/index"));



@withRouter
@withHeader()
export default class Index extends Component{
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
                    <Route path="/index/study" component={StudyIndex} />
                    <Route path="/index/review" component={ReviewIndex} />
                    <Route path="/index/exam" component={ExamIndex} />
                    <Route path="/index/mine" component={MineIndex} />
                </div>

                <Footer/>
            </div>
        )
    }
};