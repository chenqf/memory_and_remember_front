import React,{Component} from 'react';
import {Modal,Toast,TextareaItem,Button,WhiteSpace,Flex} from 'antd-mobile';
import './index.scss'
import http from '../../library/http';

class SentenceItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            type:0
        }
    }
    componentWillMount(){
        this.setState({
            explain:this.props.item.explain,
            content:this.props.item.content
        })
    }
    editEvent = ()=>{
        this.setState({
            type:1
        });
    }
    cancelSentence = ()=>{
        this.setState({
            explain:this.props.item.explain,
            content:this.props.item.content,
            type:0
        })
    }
    submitSentence = ()=>{
        let id = this.props.item.id;
        let {explain,content} = this.state;
        http.post('/sentence/update',{id,explain,content}).then(()=>{
            this.setState({
                explain,
                content,
                type:0
            })
        })
    }
    removeEvent = ()=>{
        let {id} = this.props.item;
        Modal.alert('提示','确认要删除么？', [
            { text: 'Cancel', onPress: () => {}, style: 'default' },
            { text: 'OK', onPress: () => {
                http.post('/sentence/delete',{id}).then(()=>{
                    Toast.success('删除成功~',1.5)
                })
            } },
        ]);
    }
    changeExplain = (value)=>{
        this.setState({
            explain:value
        })
    }
    changeContent = (value)=>{
        this.setState({
            content:value
        })
    }
    render() {
        let {id,content,explain} = this.props.item;
        if(!this.state.type){
            return (
                <Flex className="sentence-show-item">
                    <i onClick={()=>{this.props.playEvent(this.props.item)}} className="fa fa-play-circle-o blue font-s14"/>
                    <Flex.Item>
                        <p className="sentence-content">
                            {content}
                        </p>
                        <p className="sentence-explain">{explain}</p>
                        <p className="sentence-operation">
                            <i className="fa fa-edit" onClick={this.editEvent}/>
                            <i className="fa fa-remove" onClick={this.removeEvent}/>
                        </p>
                    </Flex.Item>
                </Flex>
            );
        }else{
            return (
                <div className="sentence-edit-item">
                    <Flex align="start" className="sentence-text sentence-content">
                        <span>英文</span>
                        <Flex.Item>
                            <TextareaItem
                                onChange={this.changeContent}
                                value={this.state.content}
                                placeholder="请输入英文例句"
                                autoHeight
                            />
                        </Flex.Item>
                    </Flex>
                    <Flex align="start" className="sentence-text sentence-explain">
                        <span>中文</span>
                        <Flex.Item>
                            <TextareaItem
                                onChange={this.changeExplain}
                                value={this.state.explain}
                                placeholder="请输入中文解释"
                                autoHeight
                            />
                        </Flex.Item>

                    </Flex>
                    {/*<div className="sentence-text sentence-word">*/}
                        {/*ddddddddddd*/}
                    {/*</div>*/}
                    <Flex className="sentence-operation">
                        <Flex.Item>
                            <Button className="cancel-button" icon="cross" size="small" onClick={this.cancelSentence}>取消</Button>
                        </Flex.Item>
                        <Flex.Item>
                            <Button type="primary" icon="check" size="small" onClick={this.submitSentence}>完成</Button>
                        </Flex.Item>
                    </Flex>
                </div>
            );
        }

    }
}


export default SentenceItem;