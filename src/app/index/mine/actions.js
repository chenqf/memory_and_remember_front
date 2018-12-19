// @flow Created by 陈其丰 on 2018/11/26.

import * as actionTypes from './actionTypes';
import {word as wordApi} from '@api';
import {actions as wordAction } from '../../../store/entities/word/index';


/*
 * 获取所有单词数量
 * */
export const fetchAllCount = params =>({
    types:[actionTypes.FETCH_ALL_COUNT_REQUEST,actionTypes.FETCH_ALL_COUNT_SUCCESS,actionTypes.FETCH_ALL_COUNT_FAILURE],
    params,
    callAPI:wordApi.queryAllCount,
    beforeDispatchSuccess:({count},dispatch)=>dispatch(wordAction.updateAllCount(count))
});



/*
 * 获取所有疑难单词数量
 * */
export const fetchHardCount = params =>({
    types:[actionTypes.FETCH_HARD_COUNT_REQUEST,actionTypes.FETCH_HARD_COUNT_SUCCESS,actionTypes.FETCH_HARD_COUNT_FAILURE],
    params,
    callAPI:wordApi.queryHardCount,
    beforeDispatchSuccess:({count},dispatch)=>dispatch(wordAction.updateHardCount(count))
});
