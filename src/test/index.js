// @flow Created by 陈其丰 on 2018/9/29.
import React,{Component} from 'react';
import {Card,WhiteSpace,WingBlank} from 'antd-mobile'
import http from '../http';
import './index.css'
import WordList from "../component/wordList/index";



class Test extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:[],
            count:5
        };
    }
    getData(){
        http.post('/word/queryRandom',{count:this.state.count},(data)=> {
            this.setState({
                items:data.items
            });
        });
    }
    refresh(){
        this.getData();
    }
    componentWillMount(){
        this.getData();
    }
    render(){
        return (
            <WingBlank size="lg" className="word-test">
                <Card style={{marginTop:15}}>
                    <Card.Header
                        title={<span className="p5">每日随测</span>}
                        thumb={<i className="blue fa fa-pencil fa-lg"/>}
                        extra={<i onClick={this.refresh.bind(this)} className="grey fa fa-refresh fa-lg"/>}
                    />
                    <Card.Body style={{minHeight:0}}>
                        <WordList test items={this.state.items}/>
                    </Card.Body>
                </Card>
            </WingBlank>
        )
    }
}


export default Test;