// @flow Created by 陈其丰 on 2018/11/14.

import * as actionTypes from './actionTypes';


export const queryExamWordList = (items,count)=>({
    type:actionTypes.QUERY_WORD_LIST,
    items,
    count
});

export const updateExamWordItem = (item)=>({
    type:actionTypes.UPDATE_WORD_ITEM,
    item
});

export const deleteExamWordItem = (id)=>({
    type:actionTypes.DELETE_WORD_ITEM,
    id
});