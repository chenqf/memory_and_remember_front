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
            contentBlur:true, // 模糊 单词
            phoneticBlur:false, // 模糊 音标
            explainsBlur:false, // 模糊 解释
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
                            test={this.props.test}
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
    items:PropTypes.Array,
    count:PropTypes.number
};



export default WordList;