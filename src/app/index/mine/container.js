// @flow Created by 陈其丰 on 2018/9/29.
import React,{Component} from 'react';
import {WingBlank,WhiteSpace ,Button,Toast,Grid} from 'antd-mobile';
import { connect } from 'react-redux'
import {actions} from './index';
import './index.scss';



const mapStateToProps = (state, ownProps) => {
    let {
        entities:{
            word:{
                allNum,
                hardNum
            }
        }
    } = state;
    return {
        allNum,
        hardNum
    }
};

const mapDispatchToProps = dispatch => ({
    fetchAllCount: () =>dispatch(actions.fetchAllCount()),
    fetchHardCount: () =>dispatch(actions.fetchHardCount()),
});

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class Mine extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        let {allNum,hardNum,fetchAllCount,fetchHardCount} = this.props;
        !allNum && fetchAllCount();
        !hardNum && fetchHardCount();
    }
    gridClickEvent = (item,index)=>{
        this.props.history.push(item.path)
    };
    render(){
        let {allNum,hardNum} = this.props;
        const data = [
            {
                path:'/mine/word',
                text:<span className="mine-title">单词本</span>,
                icon: <span className="mine-icon"><i className="fa fa-mortar-board"/></span>
            },
            {
                path:'/mine/hard',
                text:<span className="mine-title">重点词汇</span>,
                icon: <span className="mine-icon"><i className="fa fa-star-half-o"/></span>
            },
            {
                path:'/mine/statistics',
                text:<span className="mine-title">学习统计</span>,
                icon: <span className="mine-icon"><i className="fa fa-pie-chart"/></span>
            }
        ];
        return (
            <React.Fragment>
                <WhiteSpace/>
                <WingBlank>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <div className="mine-header">
                        <span>单词总数：{allNum}</span>
                        <span>重点词汇总数：{hardNum}</span>
                    </div>
                    <Grid onClick={this.gridClickEvent} data={data} columnNum={3} activeStyle={false} />
                </WingBlank>
            </React.Fragment>

        )
    }
}