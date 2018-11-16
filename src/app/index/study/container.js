// @flow Created by 陈其丰 on 2018/9/29.
import React,{Component} from 'react';
import {SegmentedControl,WhiteSpace,WingBlank} from 'antd-mobile'
import RemarkContent from './remark';
import SentenceContent from './sentence';
import { connect } from 'react-redux'
import {view as WordContent} from './todayWord/index';
import {view as SearchContent} from './searchWord/index';
import {actions} from './index';
import './index.scss'
// const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);

// let moneyKeyboardWrapProps;
// if (isIPhone) {
//     moneyKeyboardWrapProps = {
//         onTouchStart: e => e.preventDefault(),
//     };
// }

const mapStateToProps = (state, ownProps) => ({
    index: state.study.index
});

const mapDispatchToProps = dispatch => ({
    changeTab: index => dispatch(actions.changeTab(index))
});

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class Study extends Component{
    constructor(props){
        super(props);
    }
    onChange = (e)=>{
        this.props.changeTab(e.nativeEvent.selectedSegmentIndex);
    };
    render(){
        let {index:selectedIndex} = this.props;
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
                <SegmentedControl onChange={this.onChange} selectedIndex={selectedIndex} values={['单词检索', '今日单词', '今日例句','学习备注']} />
                <WhiteSpace size="lg"/>
                <Com/>
            </WingBlank>
        )
    }
}