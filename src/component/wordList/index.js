// @flow Created by 陈其丰 on 2018/9/30.

import React,{Component} from 'react';
import {Badge} from 'antd-mobile';
import WordItem from '../wordItem/index';
import './index.scss'
class WordList extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className="word-list">
                <div className="word-list-header">
                    <span>单词数</span>
                    <span>
                        <Badge hot text={String(this.props.count || this.props.items.length)}/>
                    </span>
                </div>
                {
                    this.props.items.map((item)=>{
                        return <WordItem test={this.props.test} key={item.id} wordInfo={item}/>
                    })
                }
            </div>
        )
    }
}
export default WordList;