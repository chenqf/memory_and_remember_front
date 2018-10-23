// @flow Created by 陈其丰 on 2018/10/23.

import React,{PureComponent,Component} from 'react';
import {Card} from 'antd-mobile';
import RemarkWrapper from "../../../component/remark/index";
import http from '../../../library/http';

class RemarkContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:[]
        };
    }
    componentWillMount(){
        http.post('/remark/queryByPreDate',{pre:0}).then(({items})=> {
            this.setState({
                items
            });
        })
    }
    render(){
        return (
            <Card>
                <Card.Header
                    title={<span className="p5">今日备注</span>}
                    thumb={<i className="blue fa fa-tags fa-lg"/>}
                />
                <Card.Body className="study-remark">
                    <RemarkWrapper items={this.state.items} add/>
                </Card.Body>
            </Card>
        )
    }
}
export default RemarkContent;