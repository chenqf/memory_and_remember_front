// @flow Created by 陈其丰 on 2018/10/23.

import React,{PureComponent,Component} from 'react';
import {Card,Toast} from 'antd-mobile';
import { connect } from 'react-redux'
import {actions} from './index';
import WordList from '@component/wordList'



const mapStateToProps = (state, ownProps) => {
    let {study} = state;
    let {todayWord} = study;
    let {ids,loading,error} = todayWord;
    let {
        entities:{
            word:{byId}
        }
    } = state;
    let items = ids.filter(id=>byId.hasOwnProperty(id)).map(id=>byId[id]);
    return {
        items,
        loading,
        error
    }
};

const mapDispatchToProps = dispatch => ({
    fetchQueryWordList: (params) => dispatch(actions.fetchQueryWordList(params))
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
            this.props.fetchQueryWordList({order: 'DESC'});
        }
    }
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
                    <WordList {...props} />
                </Card.Body>
            </Card>
        )
    }
}