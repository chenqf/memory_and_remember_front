// @flow Created by 陈其丰 on 2018/9/30.

import React,{Component} from 'react';
import {Badge,Checkbox,Flex} from 'antd-mobile';
import PropTypes from 'prop-types';
import WordItem from '../wordItem/index';
import './index.scss'
const CheckboxItem = Checkbox.CheckboxItem;
class WordList extends Component{
    constructor(props){
        super(props);
        this.state = {
            contentBlur:this.props.contentBlur, // 模糊 单词
            phoneticBlur:this.props.phoneticBlur, // 模糊 音标
            explainsBlur:this.props.explainsBlur, // 模糊 解释
        };
    }
    render(){
        return (
            <div className="word-list">
                <div className="word-list-header">
                    <span className="word-list-text">单词数</span>
                    <span className="word-list-badge">
                        <Badge hot text={String(this.props.count || this.props.items.length)}/>
                    </span>
                </div>
                <Flex className="word-list-check border-b">
                    <Flex.Item>
                        <CheckboxItem checked={this.state.contentBlur} onChange={() => this.setState(prevState=>({contentBlur:!prevState.contentBlur}))}>
                            模糊单词
                        </CheckboxItem>
                    </Flex.Item>
                    <Flex.Item>
                        <CheckboxItem checked={this.state.phoneticBlur} onChange={() => this.setState(prevState=>({phoneticBlur:!prevState.phoneticBlur}))}>
                            模糊音标
                        </CheckboxItem>
                    </Flex.Item>
                    <Flex.Item>
                        <CheckboxItem checked={this.state.explainsBlur} onChange={() => this.setState(prevState=>({explainsBlur:!prevState.explainsBlur}))}>
                            模糊释义
                        </CheckboxItem>
                    </Flex.Item>
                </Flex>
                {
                    this.props.items.map((item)=>{
                        return <WordItem
                            contentBlur={this.state.contentBlur}
                            phoneticBlur={this.state.phoneticBlur}
                            explainsBlur={this.state.explainsBlur}
                            date={this.props.date}
                            key={item.id}
                            wordInfo={item}
                        />
                    })
                }
            </div>
        )
    }
}

WordList.propTypes = {
    date:PropTypes.bool,
    contentBlur:PropTypes.bool,
    phoneticBlur:PropTypes.bool,
    explainsBlur:PropTypes.bool,
    items:PropTypes.Array,
    count:PropTypes.number
};
WordList.defaultProps = {
    date:true,
    contentBlur:false, // 模糊 单词
    phoneticBlur:false, // 模糊 音标
    explainsBlur:false, // 模糊 解释
}



export default WordList;