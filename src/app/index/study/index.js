// @flow Created by 陈其丰 on 2018/9/29.
import React,{Component} from 'react';
import {SegmentedControl,WhiteSpace,WingBlank} from 'antd-mobile'
import RemarkContent from './remark';
import SearchContent from './search';
import SentenceContent from './sentence';
import WordContent from './word';
import './index.scss'
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

class Study extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedIndex:0
        };
    }
    onChange(e){
        this.setState({
            selectedIndex:e.nativeEvent.selectedSegmentIndex
        })
    }
    render(){
        let {selectedIndex} = this.state;
        let Com = null;
        if(selectedIndex === 0){
            Com = SearchContent;
        }else if(selectedIndex === 1){
            Com = WordContent;
        }else if(selectedIndex === 2){
            Com = SentenceContent;
        }else {
            Com = RemarkContent;
        }
        return (
            <WingBlank size="lg" className="word-search">
                <WhiteSpace size="lg"/>
                <SegmentedControl onChange={this.onChange.bind(this)} selectedIndex={selectedIndex} values={['单词检索', '今日单词', '今日例句','学习备注']} />
                <WhiteSpace size="lg"/>
                <Com/>
            </WingBlank>
        )
    }
}


export default Study;