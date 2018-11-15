// @flow Created by 陈其丰 on 2018/9/30.

import React,{Component} from 'react';
import {Flex ,Toast ,Modal,Popover,Icon} from 'antd-mobile'
import moment from 'moment';
import PropTypes from 'prop-types';
import './index.scss'
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
            ellipsis:true,
            phoneticFlg:true,// 英 false 美 true
            showModal:false,
            showDeleteModal:false,
        };
    }
    static propTypes = {
        delete:PropTypes.bool,
        date:PropTypes.bool,
        item:PropTypes.object,
        contentBlur:PropTypes.bool,
        phoneticBlur:PropTypes.bool,
        deleteHandler:PropTypes.func,
        updateLevelHandler:PropTypes.func, // 更新单词级别
        updateTimeHandler:PropTypes.func, // 更新单词级别
        explainsBlur:PropTypes.bool,
    };
    static defaultProps = {
        date:true,
        delete:true,
        deleteHandler:()=>{},
        updateLevelHandler:()=>{},
        updateTimeHandler:()=>{}
    };
    playAudio(flg){
        let type = flg ? 2 : 1; // 英 1 false 美 2 true
        let audio = document.createElement("audio");
        audio.src = `http://dict.youdao.com/dictvoice?audio=${this.props.item.text}&type=${type}`;//路径
        audio.onerror = function () {
            Toast.fail('音频播放失败',1.5);
        };
        audio.play();
    }
    editTime(){
        this.setState({
            tempDate:moment(new Date(this.props.item.createTime)).format('YYYY-MM-DD'),
            tempDateTime:this.props.item.createTime,
            showModal:true
        });
    }
    onCloseModal = ()=>{
        let item = this.props.item;
        let createTime = this.state.tempDateTime;
        this.props.updateTimeHandler(item,createTime);
        this.setState({
            showModal:false
        })
    };
    changeDate = (e)=>{
        let value = e.target.value;
        this.setState({
            tempDate:value,
            tempDateTime:new Date(value).getTime(),
            showModal:true
        });
    };
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
    onDeleteSubmitModal = ()=>{
        let item = this.props.item;
        let wordId = item.id;
        this.props.deleteHandler(wordId);
        this.setState({
            showDeleteModal:false
        });
    };
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
        }else if(value === 'date'){
            this.editTime(this.props.item)
        }
    };
    changeLevel = ()=>{
        this.props.updateLevelHandler(this.props.item);
    };
    render(){
        let item = this.props.item;
        let explains = JSON.parse(item.explains || '[]');
        let wfs = JSON.parse(item.wfs || '[]');
        let date = this.props.date;
        let overlay = [
            (<Item key="1" value="change" icon={<i className="fa fa-exchange"/>} >英美切换</Item>),
            (<Item key="2" value="date" icon={<i className="fa fa-calendar"/>} >修改时间</Item>),
        ];
        if(this.props.delete){
            overlay.unshift(<Item key="0" value="delete" icon={<i className="fa fa-trash-o"/>} >删除</Item>)
        }
        return (
            <div className="word-item">
                <div className="word-text">
                    {/*文本*/}
                    <span className={`word-content ${this.props.contentBlur ? 'blur':''}`}>{item.text}</span>
                    {/*level 小图标*/}
                    <div className="word-level" onClick={this.changeLevel}>
                        {
                            item.level === 0
                                ?
                                <i className="fa fa-star-o yellow font-s14 pl15 pr10"/>
                                :
                                <i className="fa fa-star yellow font-s14 pl15 pr10"/>
                        }
                    </div>
                    {/*提示*/}
                    <div className="flex-1 text-a-r">
                        <Popover
                            visible={this.state.visible}
                            overlay={overlay}
                            align={{
                                offset: [6, 0],
                            }}
                            onVisibleChange={this.handleVisibleChange}
                            onSelect={this.onSelect}
                        >
                            <i className="fa fa-ellipsis-h font-s14 pt3"/>
                        </Popover>
                    </div>
                </div>
                {/*音标*/}
                <div className={`phonetic`} onClick={()=>this.playAudio(this.state.phoneticFlg)}>
                        <span className={`${this.props.phoneticBlur ? 'blur':''}`}>
                            <span className="font-s12">
                                {
                                    this.state.phoneticFlg ? '美' : '英'
                                }
                                &nbsp;
                            </span>
                            <span>[ {this.state.phoneticFlg ? item.usPhonetic : item.ukPhonetic} ]</span>
                        </span>
                    <i className="fa fa-volume-up blue font-s14 pl5"/>
                </div>
                {/*词义简析*/}
                <div className={`${this.props.explainsBlur ? 'blur':''}`}>
                    {/*解释*/}
                    <div onClick={()=>this.setState(prevState=>({ellipsis:!prevState.ellipsis}))} >
                        {
                            explains.map((item,index)=><div className={`${this.state.ellipsis ? 'ellipsis':''} explains-item`} key={index}>{item}</div>)
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
                </div>
                {/*日期*/}
                {
                    date ?
                        (
                            <span className={`word-time`}>
                                <span className="p5">
                                    {moment(new Date(item.createTime)).format('YYYY-MM-DD')}
                                </span>
                            </span>
                        ) :
                        null
                }
                <Modal
                    visible={this.state.showModal}
                    transparent
                    maskClosable={false}
                    title="请选择时间"
                    footer={[
                        { text: 'Cancel', onPress: ()=>{this.setState({showModal:false})}},
                        { text: 'Ok', onPress: this.onCloseModal},
                    ]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    <div style={{ height: 100, overflow: 'scroll' }}>
                        <input type="date" id="wordDate" value={this.state.tempDate} onChange={this.changeDate}/>
                    </div>
                </Modal>


                <Modal
                    visible={this.state.showDeleteModal}
                    transparent
                    maskClosable={false}
                    title="提示"
                    footer={[
                        { text: 'Cancel', onPress: ()=>{this.setState({showDeleteModal:false})}},
                        { text: 'Ok', onPress: this.onDeleteSubmitModal},
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