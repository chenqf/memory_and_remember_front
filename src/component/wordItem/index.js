// @flow Created by 陈其丰 on 2018/9/30.

import React,{Component} from 'react';
import {Flex ,Toast ,Modal} from 'antd-mobile'
import moment from 'moment';
import http from '../../http';
import './index.css'


function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}


class WordItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            showModal:false
        };
    }
    playAudio(type){
        let audio = document.createElement("audio");
        audio.src = `http://dict.youdao.com/dictvoice?audio=${this.props.wordInfo.text}&type=${type}`;//路径
        audio.onerror = function () {
            Toast.fail('音频播放失败',1.5);
        };
        audio.play();
    }
    editTime(){
        this.setState({
            tempDate:moment(new Date(this.props.wordInfo.createTime)).format('YYYY-MM-DD'),
            tempDateTime:this.props.wordInfo.createTime,
            showModal:true
        });
    }
    onCloseModal(item){
        let createTime = this.state.tempDateTime;
        let id = item.userWordId;
        http.post('/word/updateCreateTime', {id,createTime},()=> {
            // this.props.createTime = createTime;
            this.setState({
                showModal:false
            })
        })
    }
    changeDate(e){
        let value = e.target.value;
        this.setState({
            tempDate:value,
            tempDateTime:new Date(value).getTime(),
            showModal:true
        });
    }
    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }
    render(){
        let wordInfo = this.props.wordInfo;
        let explains = JSON.parse(wordInfo.explains || '[]');
        let wfs = JSON.parse(wordInfo.wfs || '[]');
        return (
            <div className="word-item">
                <div className="word-text">
                    <span className="word-content">{wordInfo.text}</span>
                    <span className="word-time">
                        <span onClick={()=>this.editTime(wordInfo)} style={{padding:5}}>
                            {moment(new Date(wordInfo.createTime)).format('YYYY-MM-DD')}
                        </span>
                    </span>
                </div>
                {
                    wordInfo.ukPhonetic || wordInfo.usPhonetic ?
                        <Flex className="phonetic">
                            <Flex.Item onClick={()=>this.playAudio(1)}>
                                英&nbsp;<span>[{wordInfo.ukPhonetic}]</span>
                                <a className="voice"/>
                            </Flex.Item>
                            <Flex.Item onClick={()=>this.playAudio(2)}>
                                美&nbsp;<span>[{wordInfo.usPhonetic}]</span>
                                <a className="voice"/>
                            </Flex.Item>
                        </Flex>:
                        null
                }
                <div>
                    {
                        explains.map((item,index)=><div className="explains-item" key={index}>{item}</div>)
                    }
                </div>
                <div>
                    {
                        wfs.map((item,index)=>{
                            return <div className="wfs-item" key={index}>
                                <span>{item.wf.name}</span>
                                <span>{item.wf.value}</span>
                            </div>
                        })
                    }
                </div>

                <Modal
                    visible={this.state.showModal}
                    transparent
                    maskClosable={false}
                    onClose={this.onCloseModal.bind(this,wordInfo)}
                    title="请选择时间"
                    footer={[{ text: 'Ok', onPress: this.onCloseModal.bind(this,wordInfo)}]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    <div style={{ height: 100, overflow: 'scroll' }}>
                        <input type="date" id="wordDate" value={this.state.tempDate} onChange={this.changeDate.bind(this)}/>
                    </div>
                </Modal>

            </div>
        )
    }
}
export default WordItem;