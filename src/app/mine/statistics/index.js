// @flow Created by 陈其丰 on 2018/10/19.
import React,{PureComponent,Component} from 'react';
import {WingBlank,WhiteSpace,Card} from 'antd-mobile'
import withHeader from '@hot/withHeader';
import http from '@http';



@withHeader({title:'学习统计',back:true})
export default class Statistics extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return (
            <React.Fragment>
                <WhiteSpace/>
                <WhiteSpace/>
                <WingBlank size="lg" className="word-test">
                    TODO
                </WingBlank>
            </React.Fragment>
        )
    }
};