// @flow Created by 陈其丰 on 2018/10/19.
import React,{PureComponent,Component} from 'react';
import {WingBlank,WhiteSpace,Card} from 'antd-mobile'
import withHeader from '../../../hot/withHeader';
import WordList from '../../../component/wordList/index';
import http from '../../../library/http';



@withHeader('单词本',true)
export default class extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:[],
            count:0,
            page:1,
            pageCount:10,
            over:false
        };
    }
    getData(page = 1){
        let pageCount = this.state.pageCount;
        let startNum = (page - 1) * pageCount;
        http.post('/word/queryAll',{startNum,pageCount}).then(({items,count})=>{
            this.setState({
                over:true,
                page,
                items,
                count
            });
            window.scrollTo(0,0)
        })
    }
    componentWillMount(){
        this.getData(1);
    }
    render(){
        return (
            <React.Fragment>
                <WhiteSpace/>
                <WhiteSpace/>
                <WingBlank size="lg" className="word-test">
                    <WordList {...this.state} pagination onChange={this.getData.bind(this)}/>
                </WingBlank>
            </React.Fragment>
        )
    }
}