// @flow Created by 陈其丰 on 2018/11/26.

import * as actionTypes from './actionTypes';
import {word as wordApi} from '@api';
import {actions as wordAction } from '../../../store/entities/word/index';


/*
 * 获取所有单词数量
 * */
export const fetchAllCount = (params) => dispatch => {
    dispatch(fetchAllCountRequest());
    wordApi.queryAllCount(params).then(({count})=>{
        dispatch(wordAction.updateAllCount(count));
    }).catch((error)=>{
        dispatch(fetchAllCountFailure(error));
    });
};

/*发送请求，所有单词数量*/
export const fetchAllCountRequest = () => ({
    type:actionTypes.FETCH_ALL_COUNT_REQUEST
});

/*发送请求，所有单词数量 -成功*/
export const fetchAllCountSuccess = (payload) => ({
    type:actionTypes.FETCH_ALL_COUNT_SUCCESS,
    payload
});

/*发送请求，所有单词数量 -失败*/
export const fetchAllCountFailure = (payload) => ({
    type:actionTypes.FETCH_ALL_COUNT_FAILURE,
    payload
});


/*
 * 获取所有单词数量
 * */
export const fetchHardCount = (params) => dispatch => {
    dispatch(fetchHardCountRequest());
    wordApi.queryHardCount(params).then(({count})=>{
        dispatch(wordAction.updateHandCount(count));
    }).catch((error)=>{
        dispatch(fetchHardCountFailure(error));
    });
};

/*发送请求，所有单词数量*/
export const fetchHardCountRequest = () => ({
    type:actionTypes.FETCH_HARD_COUNT_REQUEST
});

/*发送请求，所有单词数量 -成功*/
export const fetchHardCountSuccess = (payload) => ({
    type:actionTypes.FETCH_HARD_COUNT_SUCCESS,
    payload
});

/*发送请求，所有单词数量 -失败*/
export const fetchHardCountFailure = (payload) => ({
    type:actionTypes.FETCH_HARD_COUNT_FAILURE,
    payload
});
