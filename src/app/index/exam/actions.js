// @flow Created by 陈其丰 on 2018/11/14.


import {QUERY_EXAM_WORD_LIST,UPDATE_EXAM_WORD_ITEM,DELETE_EXAM_WORD_ITEM} from './actionTypes';


export const queryExamWordList = ({items,count})=>({
    type:QUERY_EXAM_WORD_LIST,
    items,
    count
});

export const updateExamWordItem = (item)=>({
    type:UPDATE_EXAM_WORD_ITEM,
    item
});

export const deleteExamWordItem = (id)=>({
    type:DELETE_EXAM_WORD_ITEM,
    id
});