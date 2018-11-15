// @flow Created by 陈其丰 on 2018/10/23.

import React,{PureComponent,Component} from 'react';
import {Card,Toast} from 'antd-mobile';
import { connect } from 'react-redux'
import http from '@http';
import {queryTodayWordList,updateTodayWordItem,deleteTodayWordItem,insertTodayWordItem} from '../actions';
import WordList from '@component/wordList'



const mapStateToProps = (state, ownProps) => ({
    count: state.todayWord.count,
    items:state.todayWord.items,
    over:state.todayWord.over
});

const mapDispatchToProps = dispatch => ({
    queryList: (items,count) => dispatch(queryTodayWordList(items,count)),
    updateItem: item => dispatch(updateTodayWordItem(item)),
    deleteItem: id => dispatch(deleteTodayWordItem(id)),
});

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class TodayWordList extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        if(!this.props.items.length){
            http.post('/word/queryByPreDate',{order:'DESC'}).then(({items,totalCount})=> {
                this.props.queryList(items,totalCount);
            });
        }
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
        let {count,over,items} = this.props;
        let props = {count,over,items};
        return (
            <Card>
                <Card.Header
                    title={<span className="p5">今日成果</span>}
                    thumb={<i className="blue fa fa-columns fa-lg"/>}
                />
                <Card.Body style={{minHeight:0}} className={'p0'}>
                    <WordList {...props}
                          deleteHandler={this.deleteHandler}
                          updateLevelHandler={this.updateLevelHandler}
                          updateTimeHandler={this.updateTimeHandler}
                    />
                </Card.Body>
            </Card>
        )
    }
}