// @flow Created by 陈其丰 on 2018/9/29.
import React,{Component} from 'react';
import {Card,WhiteSpace,WingBlank,Toast} from 'antd-mobile'
import { connect } from 'react-redux'
import WordList from "@component/wordList";
import {actions} from './index';
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    Prompt,
    withRouter
} from "react-router-dom";


const mapStateToProps = (state, ownProps) => {
    let {
            entities:{
                word:{byId}
            }
        } = state;
    let {
        examWord:{
            wordIds,
            loadingWord,
            loadWordError
        }
    } = state;

    let items = wordIds.filter(id=>byId.hasOwnProperty(id)).map(id=>byId[id]);
    return {
        loading:loadingWord,
        error:loadWordError,
        count: items.length,
        items
    }
};

const mapDispatchToProps = dispatch => ({
    queryRandom: count =>dispatch(actions.fetchWordList({count}))
});

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class Exam extends Component{
    constructor(props){
        super(props);
    }
    getData = ()=>{
        this.props.queryRandom(10);
    };
    refresh = ()=>{
        this.getData();
    };
    componentDidMount(){
        if(!this.props.items.length){
            this.getData();
        }
    }
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
                        extra={<i onClick={this.refresh} className="grey fa fa-refresh fa-lg"/>}
                    />
                    <Card.Body style={{minHeight:0}} className={'p0'}>
                        <WordList
                            date={false}
                            contentBlur={true}
                            items={items}
                            count={count}
                        />
                    </Card.Body>
                </Card>
            </WingBlank>
        )
    }
}