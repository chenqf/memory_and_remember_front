// @flow Created by 陈其丰 on 2018/11/19.

import * as actions from './actionTypes';

export const add = (item)=>({
    type:actions.ADD,
    item
});

export const addList = (items)=>({
    type:actions.ADD_LIST,
    items
});

export const update = (item)=>({
    type:actions.UPDATE,
    item
});