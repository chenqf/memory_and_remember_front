// @flow Created by 陈其丰 on 2018/11/26.

import * as actionTypes from './actionTypes';
import {word as wordApi} from '@api';
import {actions as wordAction } from '../../../store/entities/word/index';

/*
 * 获取所有单词数量
 * */
export const fetchWordList = (params) => dispatch => {
    dispatch(fetchWordListRequest());
    wordApi.queryAll(params).then(({items = [],count})=>{
        dispatch(wordAction.addList(items));
        dispatch(wordAction.updateAllCount(count));
        dispatch(fetchWordListSuccess(items.map((i)=>i.id)));
    }).catch((error)=>{
        dispatch(fetchWordListFailure(error));
    });
};

/*发送请求，所有单词数量*/
export const fetchWordListRequest = () => ({
    type:actionTypes.FETCH_WORD_LIST_REQUEST
});

/*发送请求，所有单词数量 -成功*/
export const fetchWordListSuccess = (payload) => ({
    type:actionTypes.FETCH_WORD_LIST_SUCCESS,
    payload
});

/*发送请求，所有单词数量 -失败*/
export const fetchWordListFailure = (payload) => ({
    type:actionTypes.FETCH_WORD_LIST_FAILURE,
    payload
});

/* 清空数据 */
export const empty = ()=>({
    type:actionTypes.EMPTY_WORD_LIST
});