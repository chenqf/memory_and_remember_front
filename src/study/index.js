// @flow Created by 陈其丰 on 2018/9/29.
import React,{Component} from 'react';
import {Card,WhiteSpace,WingBlank,SearchBar} from 'antd-mobile'
import http from '../http';
import './index.css'
import WordItem from "../component/wordItem/index";
import WordList from "../component/wordList/index";
import RemarkWrapper from "../component/remark/index";
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
            wordInfo:{},
            items:[],
            remark:[],
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
        });
        http.post('/remark/queryByPreDate',{pre:0},({items})=> {
            this.setState({
                remark:items
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
                        title={<span className="p5">今日备注</span>}
                        thumb={<i className="blue fa fa-tags fa-lg"/>}
                    />
                    <Card.Body className="study-remark">
                        <RemarkWrapper items={this.state.remark} add/>
                    </Card.Body>
                </Card>
                <WhiteSpace size="lg"/>
                <Card>
                    <Card.Header
                        title={<span className="p5">单词搜索</span>}
                        thumb={<i className="blue fa fa-search-plus fa-lg"/>}
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
                                title={<span className="p5">基本释义</span>}
                                thumb={<i className="blue fa fa-star-o fa-lg"/>}
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
                                title={<span className="p5">今日成果</span>}
                                thumb={<i className="blue fa fa-columns fa-lg"/>}
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