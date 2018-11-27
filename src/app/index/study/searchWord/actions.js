// @flow Created by 陈其丰 on 2018/11/15.

import * as actionTypes from './actionTypes';
import {word as wordApi} from '@api';

export const fetchQueryItem = (params) => dispatch => {
    dispatch(fetchQueryItemRequest());
    wordApi.searchItem(params).then((item)=>{
        dispatch(fetchQueryItemSuccess(item));
    }).catch((error)=>{
        dispatch(fetchQueryItemFailure(error));
    });
};

export const fetchQueryItemRequest = ()=>{
    return {
        type:actionTypes.FETCH_SEARCH_ITEM_REQUEST
    }
};

export const fetchQueryItemSuccess = (payload)=>{
    return {
        type:actionTypes.FETCH_SEARCH_ITEM_SUCCESS,
        payload
    }
};

export const fetchQueryItemFailure = (payload)=>{
    return {
        type:actionTypes.FETCH_SEARCH_ITEM_FAILURE,
        payload
    }
};
