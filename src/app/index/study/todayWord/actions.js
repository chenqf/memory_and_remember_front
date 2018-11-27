// @flow Created by 陈其丰 on 2018/11/15.

import * as actionTypes from './actionTypes';
import {word as wordApi} from '@api';
import {actions as wordAction } from '../../../../store/entities/word/index';



export const fetchQueryWordList = (params) => dispatch => {
    dispatch(fetchQueryWordListRequest());
    wordApi.queryTodayWordList(params).then(({items})=>{
        dispatch(wordAction.addList(items));
        dispatch(fetchQueryWordListSuccess(items.map(item=>item.id)));
    }).catch((error)=>{
        dispatch(fetchQueryWordListFailure(error));
    });
};

export const fetchQueryWordListRequest = ()=>{
    return {
        type:actionTypes.FETCH_QUERY_LIST_REQUEST
    }
};
export const fetchQueryWordListSuccess = (payload)=>{
    return {
        type:actionTypes.FETCH_QUERY_LIST_SUCCESS,
        payload
    }
};
export const fetchQueryWordListFailure = (payload)=>{
    return {
        type:actionTypes.FETCH_QUERY_LIST_FAILURE,
        payload
    }
};


export const insertItem = (payload)=>{
    return {
        type:actionTypes.INSERT_ITEM,
        payload
    }
};