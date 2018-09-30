// @flow Created by 陈其丰 on 2018/9/29.
import React,{Component} from 'react';
import {Card,WhiteSpace,WingBlank,SearchBar,List} from 'antd-mobile'
import http from '../http';
import './index.css'
import WordItem from "../component/wordItem/index";
import WordList from "../component/wordList/index";
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
const Item = List.Item;
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
            wordInfo:{},
            items:[],
            totalCount:0
        };
    }
    searchWordHandler(q){
        http.post('/word/search', {q},(data)=> {
            let oldData = this.state.wordInfo;
            if(oldData.new){
                this.state.items.unshift(oldData);
            }
            this.setState({
                wordInfo:data,
                totalCount:this.state.items.length
            });
        })
    }
    componentWillMount(){
        http.post('/word/queryByPreDate',{order:'DESC'},(data)=> {
            this.setState({
                items:data.items,
                totalCount:data.totalCount
            });
        })
    }
    render(){
        let wordInfo = this.state.wordInfo;
        return (
            <WingBlank size="lg" className="word-search">
                <WhiteSpace size="lg"/>
                <Card>
                    <Card.Header
                        title="单词检索"
                        thumb="//shared.ydstatic.com/dict/youdaowap/icon/cidian34.png"
                        // extra={<span>this is extra</span>}
                    />
                    <Card.Body>
                        <SearchBar
                            placeholder="search English word"
                            onSubmit={this.searchWordHandler.bind(this)}
                        />
                    </Card.Body>
                </Card>
                {
                    wordInfo.text ?
                        <Card style={{marginTop:15}}>
                            <Card.Header
                                title="基本释义"
                                thumb="//shared.ydstatic.com/dict/youdaowap/icon/cidian34.png"
                            />
                            <Card.Body style={{minHeight:0}}>
                                <WordItem wordInfo={wordInfo}/>
                            </Card.Body>
                        </Card>
                        :
                        null
                }
                {
                    this.state.totalCount ?
                        <Card style={{marginTop:15}}>
                            <Card.Header
                                title={`今日成果`}
                                thumb="//shared.ydstatic.com/dict/youdaowap/icon/cidian34.png"
                                extra={this.state.totalCount}
                            />
                            <Card.Body style={{minHeight:0}}>
                                <WordList items={this.state.items}/>
                            </Card.Body>
                        </Card>:
                        null
                }

            </WingBlank>
        )
    }
}


export default Study;