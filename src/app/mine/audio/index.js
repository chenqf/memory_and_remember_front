// @flow Created by 陈其丰 on 2018/10/19.
import React,{PureComponent,Component} from 'react';
import {Toast} from 'antd-mobile';
import btts from '../../../library/btts';


class Audio extends Component{
    constructor(props){
        super(props);
        this.audio = null;
        this.state = {

        };
    }
    audioPlay = ()=>{
        this.audio.play && this.audio.play();
    }
    audioPause(){
        this.audio.play && this.audio.pause();
    }
    componentWillMount(){

    }
    testEvent = ()=>{
        this.audio = btts({
            tex: 't r o u z e r s',
            tok: '24.2b801dbce62183c703a296f69478f7f8.2592000.1542856090.282335-14516358',
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
                this.audio.play();
                this.audio.addEventListener("ended", ()=> {
                    // this.audio = null;
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
    render(){
        return (
            <div>
                <button onClick={this.testEvent}>test</button>
                <button onClick={this.audioPlay}>play</button>
            </div>
        )
    }
}

export default Audio;