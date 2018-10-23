// @flow Created by 陈其丰 on 2018/10/23.

import React,{PureComponent,Component} from 'react';
import {Card} from 'antd-mobile';
import http from '../../../library/http';
import WordList from '../../../component/wordList/index'

class WordContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            over:false,
            items:[],
            totalCount:0
        };
    }
    componentWillMount(){
        http.post('/word/queryByPreDate',{order:'DESC'}).then((data)=> {
            this.setState({
                over:true,
                items:data.items,
                totalCount:data.totalCount
            });
        });
    }
    render(){
        return (
            <Card>
                <Card.Header
                    title={<span className="p5">今日成果</span>}
                    thumb={<i className="blue fa fa-columns fa-lg"/>}
                />
                <Card.Body style={{minHeight:0}} className={'p0'}>
                    <WordList over={this.state.over} items={this.state.items}/>
                </Card.Body>
            </Card>
        )
    }
}
export default WordContent;