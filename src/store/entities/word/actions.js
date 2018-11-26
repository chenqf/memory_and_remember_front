// @flow Created by 陈其丰 on 2018/11/19.

import * as actions from './actionTypes';

export const add = (payload)=>({
    type:actions.ADD,
    payload
});

export const addList = (payload)=>({
    type:actions.ADD_LIST,
    payload
});

export const update = (payload)=>({
    type:actions.UPDATE,
    payload
});

export const deleteItem = (payload)=>({
    type:actions.DELETE,
    payload
});

export const updateAllCount = (payload)=>({
    type:actions.UPDATE_ALL_COUNT,
    payload
});

export const updateHandCount = (payload)=>({
    type:actions.UPDATE_HARD_COUNT,
    payload
});