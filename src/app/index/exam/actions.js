// @flow Created by 陈其丰 on 2018/11/14.

import * as actionTypes from './actionTypes';


export const queryWordList = (items,count)=>({
    type:actionTypes.QUERY_WORD_LIST,
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