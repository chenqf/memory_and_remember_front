// @flow Created by 陈其丰 on 2018/9/30.

import React,{Component} from 'react';
import {Flex ,Toast} from 'antd-mobile'
import './index.css'
class WordItem extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    playAudio(type){
        let audio = document.createElement("audio");
        audio.src = `http://dict.youdao.com/dictvoice?audio=${this.props.wordInfo.text}&type=${type}`;//路径
        audio.onerror = function () {
            Toast.fail('音频播放失败',1.5);
        };
        audio.play();
    }
    render(){
        let wordInfo = this.props.wordInfo;
        let explains = JSON.parse(wordInfo.explains || '[]');
        let wfs = JSON.parse(wordInfo.wfs || '[]');
        return (
            <div className="word-item">
                <span className="word-text">{wordInfo.text}</span>
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
            </div>
        )
    }
}
export default WordItem;