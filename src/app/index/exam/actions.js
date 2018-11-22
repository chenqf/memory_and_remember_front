// @flow Created by 陈其丰 on 2018/11/14.

import * as actionTypes from './actionTypes';
import {word as wordApi} from '@api';


/*
* 获取复习单词
* */
export const fetchWordList = (params) => dispatch => {
    dispatch(fetchWordListRequest());
    wordApi.queryRandom(params).then(({items = []})=>{
        dispatch(fetchWordListSuccess(items.map((i)=>i.id)));
    }).catch((error)=>{
        dispatch(fetchWordListFailure(error));
    });
};

/*发送请求，获取单词列表*/
export const fetchWordListRequest = () => ({
    type:actionTypes.FETCH_WORD_LIST_REQUEST
});

/*发送请求，获取单词列表 -成功*/
export const fetchWordListSuccess = (ids) => ({
    type:actionTypes.FETCH_WORD_LIST_SUCCESS,
    ids
});

/*发送请求，获取单词列表 -失败*/
export const fetchWordListFailure = (error) => ({
    type:actionTypes.FETCH_WORD_LIST_FAILURE,
    error
});




export const updateWordList = (items,count)=>({
    type:actionTypes.UPDATE_WORD_LIST,
    items,
    count
});

export const updateWordItem = (item)=>({
    type:actionTypes.UPDATE_WORD_ITEM,
    item
});

export const deleteWordItem = (id)=>({
    type:actionTypes.DELETE_WORD_ITEM,
    id
});