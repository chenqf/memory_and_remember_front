import React,{Component} from 'react';
import './index.scss'
import { withCookies, Cookies } from 'react-cookie';
import {Toast} from 'antd-mobile'
import tools from '../../library/tools';
import SentenceItem from '../sentenceItem/index';

class SentenceList extends Component {
    constructor(props){
        super(props);
    }
    playItem = (item)=>{
        this.audio && this.audio.pause && this.audio.pause();
        this.audio = document.createElement("audio");
        this.audio.src = tools.getSentenceAudioSrc(item.content);//路径
        this.audio.onerror = function () {
            Toast.fail('音频播放失败',1.5);
        };
        this.audio.play();
        this.audio.addEventListener("ended", ()=> {
            console.log('end');
            this.audio = null;
        }, false)
    }
    render() {
        return (
            <div className="sentence-list">
                {
                    this.props.items.map((item)=>{
                        return <SentenceItem key={item.id} playEvent={this.playItem} item={item}/>
                    })
                }
            </div>
        );
    }
}


export default withCookies(SentenceList);