// @flow Created by 陈其丰 on 2018/11/15.

import {
    //今日单词
    QUERY_TODAY_WORD_LIST,
    DELETE_TODAY_WORD_ITEM,
    UPDATE_TODAY_WORD_ITEM,
    INSERT_TODAY_WORD_ITEM
} from './actionTypes';


export const queryTodayWordList = (items,count)=>{
    return {
        type:QUERY_TODAY_WORD_LIST,
        items,
        count
    }
};
export const deleteTodayWordItem = (id)=>{
    return {
        type:DELETE_TODAY_WORD_ITEM,
        id
    }
};
export const updateTodayWordItem = (item)=>{
    return {
        type:UPDATE_TODAY_WORD_ITEM,
        item
    }
};
export const insertTodayWordItem = (item)=>{
    return {
        type:INSERT_TODAY_WORD_ITEM,
        item
    }
};