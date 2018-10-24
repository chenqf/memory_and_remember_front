import React,{Component} from 'react';
import { Toast } from "antd-mobile";
import './index.scss'
import btts from '../../library/btts';
import { withCookies, Cookies } from 'react-cookie';

class SentenceList extends Component {
    constructor(props){
        super(props);
        this.audio = null;
        this.state = {
            pause:false,
            playId:null
        }
    }
    audioPlay(id){
        this.setState({
            pause:false,
            playId:id
        });
        this.audio && this.audio.play && this.audio.play();
    }
    audioPause(){
        this.setState({
            pause:true
        });
        this.audio && this.audio.pause && this.audio.pause();
    }
    playItem(item){
        let {content,id} = item;
        let {playId} = this.state;
        if(id === playId){
            this.audioPlay(id);
            return;
        }else{
            this.audio && this.audio.pause && this.audio.pause();
        }
        let token = this.props.cookies.get('btoken');
        this.audio = btts({
            tex: content,
            tok: token || '24.65ae5d0726ba41b343f2ed8cacc88a85.2592000.1542867454.282335-14516358',
            spd: 3,
            pit: 4, // 音调 0-15
            vol: 5, // 音量 0-15
            per: 1, // 发音人选择, 0为普通女声，1为普通男生，3为情感合成-度逍遥，4为情感合成-度丫丫，默认为普通女声
        }, {
            volume: 0.5,// 音量 0-1
            autoDestory: false, // 播放完毕，是否自动删除
            timeout: 10000,// 超时时间 默认 60秒
            hidden: true, // 是否隐藏
            onInit: function (htmlAudioElement) {

            },
            onSuccess: (htmlAudioElement)=> {
                this.audio = htmlAudioElement;
                this.audioPlay(id);
                this.audio.addEventListener("ended", ()=> {
                    this.setState({
                        playId:null
                    });
                    this.audio = null;
                }, false)
            },
            onError: function(text) {
                Toast.fail(text, 1.5)
            },
            onTimeout: function () {
                Toast.fail('超时请重试', 1.5)
            }
        });
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
                                    {
                                        this.state.playId === id && !this.state.pause
                                            ?
                                            <i onClick={this.audioPause.bind(this,{id,content,explain})} className="fa fa-stop-circle blue font-s14"/>
                                            :
                                            <i onClick={this.playItem.bind(this,{id,content,explain})} className="fa fa-play-circle-o blue font-s14"/>
                                    }

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