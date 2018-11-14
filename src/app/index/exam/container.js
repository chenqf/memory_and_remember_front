// @flow Created by 陈其丰 on 2018/9/29.
import React,{Component} from 'react';
import {Card,WhiteSpace,WingBlank,Toast} from 'antd-mobile'
import { connect } from 'react-redux'
import http from '../../../library/http';
import './index.scss'
import WordList from "../../../component/wordList/index";
import {queryExamWordList,updateExamWordItem,deleteExamWordItem} from './actions';
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    Prompt,
    withRouter
} from "react-router-dom";


const mapStateToProps = (state, ownProps) => ({
    count: state.exam.count,
    items:state.exam.items
});

const mapDispatchToProps = dispatch => ({
    queryList: items => dispatch(queryExamWordList(items)),
    updateItem: item => dispatch(updateExamWordItem(item)),
    deleteItem: id => dispatch(deleteExamWordItem(id)),
});

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class Exam extends Component{
    constructor(props){
        super(props);
    }
    getData(){
        http.post('/word/queryRandom',{hold:true,count:1}).then((data)=> {
            this.props.queryList({
                items:data.items,
                count:data.items.length
            });
        });
    }
    refresh(){
        this.getData();
    }
    componentDidMount(){
        this.getData();
    }
    deleteHandler = (wordId)=>{
        http.post('/word/delete', {wordId}).then(()=> {
            this.props.deleteItem(wordId);
        })
    };
    updateTimeHandler = (item,createTime)=>{
        http.post('/word/updateCreateTime', {id:item.userWordId,createTime}).then(()=> {
            this.props.updateItem({...item,createTime})
        })
    };
    updateLevelHandler = (item)=>{
        let level = item.level === 0 ? 1 : 0;
        let id = item.userWordId;
        http.post('/word/updateLevel', {level,id}).then(()=> {
            if(level === 1){
                Toast.success('标记为疑难词汇~',1.5)
            }else{
                Toast.success('标记为普通词汇~',1.5)
            }
            this.props.updateItem({...item,level})
        })
    };
    render(){
        let {items,count} = this.props;
        return (
            <WingBlank size="lg" className="word-test">
                <Prompt
                    when
                    message={location =>
                        `确认您已测验完成，想要离开了吗？`
                    }
                />
                <Card style={{marginTop:15}}>
                    <Card.Header
                        title={<span className="p5">每日随测</span>}
                        thumb={<i className="blue fa fa-pencil fa-lg"/>}
                        extra={<i onClick={this.refresh.bind(this)} className="grey fa fa-refresh fa-lg"/>}
                    />
                    <Card.Body style={{minHeight:0}} className={'p0'}>
                        <WordList
                            date={false}
                            contentBlur={true}
                            deleteHandler={this.deleteHandler}
                            updateLevelHandler={this.updateLevelHandler}
                            updateTimeHandler={this.updateTimeHandler}
                            items={items}
                            count={count}
                        />
                    </Card.Body>
                </Card>
            </WingBlank>
        )
    }
}