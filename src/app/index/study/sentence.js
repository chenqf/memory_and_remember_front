// @flow Created by 陈其丰 on 2018/10/23.

import React,{PureComponent,Component} from 'react';
import {Card,Flex,TextareaItem,Button,WhiteSpace} from 'antd-mobile';
import http from '../../../library/http';
import SentenceList from '../../../component/sentencekList/index';

class SentenceContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:[],
            content:'',
            explain:''
        };
    }
    changeContent(value){
        this.setState({
            content:value
        })
    }
    changeExplain(value){
        this.setState({
            explain:value
        })
    }
    componentWillMount(){
        http.post('/sentence/queryByPreDate',{pre:0}).then(({items})=> {
            this.setState({
                items
            });
        })
    }
    submitSentence(){
        let {items,content,explain} = this.state;
        http.post('/sentence/insert',{content,explain}).then((data)=>{
            items.push({content,explain,id:data});
            this.setState({
                items,
                content:'',
                explain:''
            })
        });

    }
    render(){
        return (
            <React.Fragment>
                {
                    this.state.items.length ?
                        <React.Fragment>
                            <Card>
                                <Card.Header
                                    title={<span className="p5">例句展示</span>}
                                    thumb={<i className="blue fa fa-list-ul"/>}
                                />
                                <Card.Body className="pt0">
                                    <SentenceList items={this.state.items}/>
                                </Card.Body>
                            </Card>
                            <WhiteSpace size="lg"/>
                        </React.Fragment>
                        :
                        null
                }
                <Card className="sentence-content">
                    <Card.Header
                        title={<span className="p5">添加例句</span>}
                        thumb={<i className="blue fa fa-plus-square-o fa-lg pt4"/>}
                        // extra={<span>this is extra</span>}
                    />
                    <Card.Body className="pt0">
                        <Flex align="start" className="border-b">
                        <span className="sentence-content-add-title">
                            英文
                        </span>
                            <Flex.Item>
                                <TextareaItem
                                    value={this.state.content}
                                    onChange={this.changeContent.bind(this)}
                                    className="sentence-content-add-text"
                                    placeholder="请输入英文句式"
                                    autoHeight
                                />
                            </Flex.Item>
                        </Flex>
                        <Flex align="start" className="border-b">
                        <span className="sentence-content-add-title">
                            中文
                        </span>
                            <Flex.Item>
                                <TextareaItem
                                    value={this.state.explain}
                                    onChange={this.changeExplain.bind(this)}
                                    className="sentence-content-add-text"
                                    placeholder="请输入中文句式"
                                    autoHeight
                                />
                            </Flex.Item>
                        </Flex>
                        <Button style={{marginLeft:5,marginTop:8}} type="primary" icon="check" size="small" onClick={this.submitSentence.bind(this)}>添加</Button>
                    </Card.Body>
                </Card>
            </React.Fragment>

        )
    }
}
export default SentenceContent;