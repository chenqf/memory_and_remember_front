// @flow Created by 陈其丰 on 2018/10/19.
import React,{PureComponent,Component} from 'react';
import {WingBlank,WhiteSpace,Card} from 'antd-mobile'
import Header from '../../../component/header/index';
import http from '../../../library/http';


class Statistics extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return (
            <React.Fragment>
                <Header title="学习统计" back />
                <WhiteSpace/>
                <WhiteSpace/>
                <WingBlank size="lg" className="word-test">
                    TODO
                </WingBlank>
            </React.Fragment>
        )
    }
}

export default Statistics;