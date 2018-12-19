// @flow Created by 陈其丰 on 2018/11/14.

import * as actionTypes from './actionTypes';
import {word as wordApi} from '@api';
import {actions as wordAction } from '../../../store/entities/word/index';


/*
 * 获取复习单词
 * */
export const fetchWordList = params =>({
    types:[actionTypes.FETCH_WORD_LIST_REQUEST,actionTypes.FETCH_WORD_LIST_SUCCESS,actionTypes.FETCH_WORD_LIST_FAILURE],
    params,
    callAPI:wordApi.queryRandom,
    beforeDispatchSuccess:({items = []},dispatch)=>dispatch(wordAction.addList(items)),
    pickPayload:({items = []})=>items.map(i=>i.id)
});
