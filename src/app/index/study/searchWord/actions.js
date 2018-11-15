// @flow Created by 陈其丰 on 2018/11/15.

import {
    //单词检索
    UPDATE_SEARCH_WORD,
    DELETE_SEARCH_WORD,

} from './actionTypes';

export const updateSearchWord = (item)=>{
    return {
        type:UPDATE_SEARCH_WORD,
        item
    }
};

export const deleteSearchWord = ()=>{
    return {type:DELETE_SEARCH_WORD}
};
