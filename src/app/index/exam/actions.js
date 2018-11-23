// @flow Created by 陈其丰 on 2018/11/14.

import * as actionTypes from './actionTypes';
import {word as wordApi} from '@api';
import {actions as wordAction } from '../../../store/entities/word/index';


/*
* 获取复习单词
* */
export const fetchWordList = (params) => dispatch => {
    dispatch(fetchWordListRequest());
    wordApi.queryRandom(params).then(({items = []})=>{
        dispatch(wordAction.addList(items));
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
export const fetchWordListSuccess = (payload) => ({
    type:actionTypes.FETCH_WORD_LIST_SUCCESS,
    payload
});

/*发送请求，获取单词列表 -失败*/
export const fetchWordListFailure = (payload) => ({
    type:actionTypes.FETCH_WORD_LIST_FAILURE,
    payload
});
