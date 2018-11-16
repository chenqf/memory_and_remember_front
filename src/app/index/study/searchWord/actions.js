// @flow Created by 陈其丰 on 2018/11/15.

import * as actionTypes from './actionTypes';


export const updateWord = (item)=>{
    return {
        type:actionTypes.UPDATE_WORD,
        item
    }
};
