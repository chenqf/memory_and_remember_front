// @flow Created by 陈其丰 on 2018/11/14.

import * as actionTypes from './actionTypes';
import http from '@http';


// export const fetchWordListAsync = (params = {})=>{
//     return (dispatch,getState)=>{
//         dispatch(fetchWordListRequest());
//         http.post('/word/queryRandom',params).then((data)=> {
//             dispatch(fetchWordListSuccess(data.items));
//         }).catch((error)=>{
//             dispatch(fetchWordListFailure(error));
//         });
//     }
// };
//
// export const fetchWordListRequest = ()=>{
//     return {
//         type:actionTypes.FETCH_WORD_LIST_REQUEST
//     }
// };
//
// export const fetchWordListSuccess = (items)=>{
//     return {
//         type:actionTypes.FETCH_WORD_LIST_SUCCESS,
//         items,
//         count:items.length
//     }
// };
//
// export const fetchWordListFailure = (error)=>{
//     return {
//         type:actionTypes.FETCH_WORD_LIST_FAILURE,
//         error
//     }
// };


export const updateWordList = (items,count)=>({
    type:actionTypes.UPDATE_WORD_LIST,
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