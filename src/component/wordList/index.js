// @flow Created by 陈其丰 on 2018/9/30.

import React,{Component} from 'react';
import {Badge,Checkbox,Flex,Pagination} from 'antd-mobile';
import PropTypes from 'prop-types';
import {view as WordItem} from '@component/wordItem';
import './index.scss'
const CheckboxItem = Checkbox.CheckboxItem;
export default class WordList extends Component{
    constructor(props){
        super(props);
        this.state = {
            contentBlur:this.props.contentBlur, // 模糊 单词
            phoneticBlur:this.props.phoneticBlur, // 模糊 音标
            explainsBlur:this.props.explainsBlur, // 模糊 解释
        };
    }
    static propTypes = {
        pagination:PropTypes.bool,// 是否有分页
        pageCount:PropTypes.number,//分页，每页多少条
        onChange:PropTypes.func,//切换分页回调函数
        page:PropTypes.number,//当前第几页
        loading:PropTypes.bool,//是否显示加载中
        delete:PropTypes.bool,//是否有删除按钮
        date:PropTypes.bool,// 是否显示日期
        contentBlur:PropTypes.bool,// 模糊 单词
        phoneticBlur:PropTypes.bool,// 模糊 音标
        explainsBlur:PropTypes.bool,// 模糊 解释
        items:PropTypes.array,// 数据
        count:PropTypes.number // 总条数
    };
    static defaultProps = {
        over:false,
        delete:true,
        date:true, // 是否显示日期
        items:[], // 数据
        count:0, // 总条数
        loading:false, // 是否显示加载中
        contentBlur:false, // 模糊 单词
        phoneticBlur:false, // 模糊 音标
        explainsBlur:false, // 模糊 解释
    };
    render(){
        let len = this.props.items.length;
        let count = this.props.count || len;
        // let over = this.props.over || !!count;
        // if(!over){
        //     return null;
        // }
        // if(count === 0 && over){
        //     return (
        //         <div className="word-list-empty">
        //             <img src="//image1.51tiangou.com/tgou2/img2/blank/blankNew/blankOrderList3.png"/>
        //             <p>暂时没有需要复习的单词哦~</p>
        //         </div>
        //     )
        // }
        let {date,pagination,pageCount,onChange,page} = this.props;
        let {contentBlur,phoneticBlur,explainsBlur} = this.state;
        if(!count){
            return null;
        }
        return (
            <div className="word-list">
                <div className="word-list-header">
                    <span className="word-list-text">单词数</span>
                    <span className="word-list-badge">
                        <Badge hot text={String(count)}/>
                    </span>
                </div>
                <Flex className="word-list-check border-b">
                    <Flex.Item>
                        <CheckboxItem checked={contentBlur} onChange={() => this.setState(prevState=>({contentBlur:!prevState.contentBlur}))}>
                            模糊单词
                        </CheckboxItem>
                    </Flex.Item>
                    <Flex.Item>
                        <CheckboxItem checked={phoneticBlur} onChange={() => this.setState(prevState=>({phoneticBlur:!prevState.phoneticBlur}))}>
                            模糊音标
                        </CheckboxItem>
                    </Flex.Item>
                    <Flex.Item>
                        <CheckboxItem checked={explainsBlur} onChange={() => this.setState(prevState=>({explainsBlur:!prevState.explainsBlur}))}>
                            模糊释义
                        </CheckboxItem>
                    </Flex.Item>
                </Flex>
                {
                    this.props.items.map((item)=>{
                        return <WordItem
                            contentBlur={contentBlur}
                            delete={this.props.delete}
                            phoneticBlur={phoneticBlur}
                            explainsBlur={explainsBlur}
                            date={date}
                            key={item.id}
                            item={item}
                        />
                    })
                }
                {
                    pagination && pageCount && onChange && page?
                        <div className="word-list-pagination">
                            <Pagination
                                onChange={onChange}
                                total={Math.ceil(count/pageCount)}
                                current={page}
                                locale={{prevText: 'Prev',nextText: 'Next',}}
                            />
                        </div>
                        :
                        null
                }
            </div>
        )
    }
}