// @flow Created by 陈其丰 on 2018/11/16.

import {CHANGE_TAB} from './actionTypes';

export const changeTab = (index) =>{
    return {
        type:CHANGE_TAB,
        index
    }
};