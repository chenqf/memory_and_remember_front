// @flow Created by 陈其丰 on 2018/9/29.
import React,{Component} from 'react';
import {WingBlank,WhiteSpace ,Button,Toast,Grid} from 'antd-mobile';
import http from '../../library/http';
import './index.scss';




class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }
    submit(){

    }
    componentDidMount(){
        http.post('/word/queryAllCount').then(({count})=>{
            this.setState({
                count
            })
        })
        http.post('/word/queryHardCount').then(({count:hardCount})=>{
            this.setState({
                hardCount
            })
        })
    }
    gridClickEvent(item,index){
        debugger
    }
    render(){
        if(this.state.count === undefined || this.state.hardCount === undefined){
            return null;
        }
        const data = [
            {
                text:<span className="mine-title">单词本</span>,
                icon: <span className="mine-icon"><i className="fa fa-mortar-board"/></span>
            },
            {
                text:<span className="mine-title">重点词汇</span>,
                icon: <span className="mine-icon"><i className="fa fa-star-half-o"/></span>
            },
            {
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
                        <span>单词总数：{this.state.count}</span>
                        <span>重点词汇总数：{this.state.hardCount}</span>
                    </div>
                    <Grid onClick={this.gridClickEvent.bind(this)} data={data} columnNum={3} activeStyle={false} />
                </WingBlank>
            </React.Fragment>

        )
    }
}
export default Login;