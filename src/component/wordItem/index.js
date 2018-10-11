// @flow Created by 陈其丰 on 2018/9/30.

import React,{Component} from 'react';
import {Flex ,Toast ,Modal,Popover,Icon} from 'antd-mobile'
import moment from 'moment';
import http from '../../http';
import './index.css'
const Item = Popover.Item;


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
            visible:false,
            phoneticFlg:true,// 英 false 美 true
            showModal:false,
            showDeleteModal:false,
        };
    }
    playAudio(flg){
        let type = flg ? 2 : 1; // 英 1 false 美 2 true
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
    };
    onDeleteSubmitModal(item){
        let wordId = item.id;
        http.post('/word/delete', {wordId},()=> {
            this.setState({
                showDeleteModal:false
            })
        })
    }
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };
    onSelect = (opt) => {
        let value = opt.props.value;
        this.setState({visible:false});
        if(value === 'delete'){
            this.setState({showDeleteModal:true})
        }else if(value === 'change'){
            this.setState((prevState, props) => ({
                phoneticFlg: !prevState.phoneticFlg
            }));
        }
    };
    render(){
        let wordInfo = this.props.wordInfo;
        let explains = JSON.parse(wordInfo.explains || '[]');
        let wfs = JSON.parse(wordInfo.wfs || '[]');
        return (
            <div className="word-item">
                <div className="word-text">
                    <span className="word-content">{wordInfo.text}</span> &nbsp;&nbsp;&nbsp;&nbsp;
                    {/*音标*/}
                    <div className="phonetic" onClick={()=>this.playAudio(this.state.phoneticFlg)}>
                        <span className="fs12">
                            {
                                this.state.phoneticFlg ? '美' : '英'
                            }
                            &nbsp;
                        </span>
                        <span>[ {this.state.phoneticFlg ? wordInfo.usPhonetic : wordInfo.ukPhonetic} ]</span>
                        <a className="voice"/>
                    </div>
                    <Popover
                        overlayClassName="index-page"
                        overlayStyle={{ background:'#222',color: '#000' }}
                        visible={this.state.visible}
                        overlay={[
                            (<Item key="0" value="delete" icon={<i className="fa fa-trash-o"/>} data-seed="logId">删除</Item>),
                            (<Item key="1" value="change" icon={<i className="fa fa-hourglass-end"/>} data-seed="logId">英美切换</Item>),
                        ]}
                        align={{
                            offset: [6, -5],
                        }}
                        onVisibleChange={this.handleVisibleChange}
                        onSelect={this.onSelect}
                    >
                        <i className="fa fa-ellipsis-h right"/>
                    </Popover>
                </div>

                {/*解释*/}
                <div>
                    {
                        explains.map((item,index)=><div className="explains-item" key={index}>{item}</div>)
                    }
                </div>
                {/*变形*/}
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
                {/*日期*/}
                <span className={`word-time ${this.props.test ? 'hide':''}`}>
                    <span onClick={()=>this.editTime(wordInfo)} style={{padding:5}}>
                        {moment(new Date(wordInfo.createTime)).format('YYYY-MM-DD')}
                    </span>
                </span>


                <Modal
                    visible={this.state.showModal}
                    transparent
                    maskClosable={false}
                    title="请选择时间"
                    footer={[
                        { text: 'Cancel', onPress: ()=>{this.setState({showModal:false})}},
                        { text: 'Ok', onPress: this.onCloseModal.bind(this,wordInfo)},
                    ]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    <div style={{ height: 100, overflow: 'scroll' }}>
                        <input type="date" id="wordDate" value={this.state.tempDate} onChange={this.changeDate.bind(this)}/>
                    </div>
                </Modal>


                <Modal
                    visible={this.state.showDeleteModal}
                    transparent
                    maskClosable={false}
                    title="提示"
                    footer={[
                        { text: 'Cancel', onPress: ()=>{this.setState({showDeleteModal:false})}},
                        { text: 'Ok', onPress: this.onDeleteSubmitModal.bind(this,wordInfo)},
                    ]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    确认删除么
                </Modal>

            </div>
        )
    }
}
export default WordItem;