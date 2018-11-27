// @flow Created by 陈其丰 on 2018/11/15.

import * as actionTypes from './actionTypes';


export const queryList = (items,count)=>{
    return {
        type:actionTypes.QUERY_LIST,
        items,
        count
    }
};

export const insertItem = (item)=>{
    return {
        type:actionTypes.INSERT_ITEM,
        item
    }
};