import React,{Component} from 'react';
import './index.scss'
import { withCookies, Cookies } from 'react-cookie';
import {Toast} from 'antd-mobile'
import tools from '../../library/tools';

class SentenceList extends Component {
    constructor(props){
        super(props);
    }
    playItem(item){
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
                    this.props.items.map(({id,content,explain})=>{
                        return (
                            <div className="sentence-list-item" key={id}>
                                <p className="sentence-list-content">
                                    {content}
                                    <i onClick={this.playItem.bind(this,{id,content,explain})} className="fa fa-play-circle-o blue font-s14"/>
                                </p>
                                <p className="sentence-list-explain">{explain}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}


export default withCookies(SentenceList);