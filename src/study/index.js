// @flow Created by 陈其丰 on 2018/9/29.
import React,{Component} from 'react';
import {Card,InputItem,WhiteSpace,WingBlank,SearchBar } from 'antd-mobile'
import axios from 'axios';
import http from '../http';
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

class Study extends Component{
    constructor(props){
        super(props);
        this.state = {
            wordInfo:{}
        };
    }
    searchWordHandler(q){
        http.post('/word/search', {q}).then((data)=>{
            console.log('--------',data);
        });
    }
    render(){
        return (
            <WingBlank size="lg">
                <WhiteSpace size="lg"/>
                <Card>
                    <Card.Header
                        title="单词检索"
                        thumb="//shared.ydstatic.com/dict/youdaowap/icon/cidian34.png"
                        extra={<span>this is extra</span>}
                    />
                    <Card.Body>
                        <SearchBar
                            placeholder="search English word"
                            onSubmit={this.searchWordHandler.bind(this)}
                        />
                    </Card.Body>
                </Card>

            </WingBlank>
        )
    }
}


export default Study;