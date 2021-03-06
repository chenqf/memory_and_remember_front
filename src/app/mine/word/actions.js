// @flow Created by 陈其丰 on 2018/11/26.

import * as actionTypes from './actionTypes';
import {word as wordApi} from '@api';
import {actions as wordAction } from '../../../store/entities/word/index';



/*
 * 获取所有单词数量
 * */
export const fetchWordList = params =>({
    types:[actionTypes.FETCH_WORD_LIST_REQUEST,actionTypes.FETCH_WORD_LIST_SUCCESS,actionTypes.FETCH_WORD_LIST_FAILURE],
    params,
    callAPI:wordApi.queryAll,
    beforeDispatchSuccess:({items = [],count},dispatch)=>{
        dispatch(wordAction.addList(items));
        dispatch(wordAction.updateAllCount(count));
    },
    pickPayload:({items = [],count})=>items.map((i)=>i.id)
});

/* 清空数据 */
export const empty = ()=>({
    type:actionTypes.EMPTY_WORD_LIST
});