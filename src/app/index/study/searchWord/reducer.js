// @flow Created by 陈其丰 on 2018/11/15.


import * as actionTypes from './actionTypes';

const defaultState = {
    loading:false,
    error:null,
    item:{}
};
export default (state = defaultState,action)=>{
    switch (action.type){
        case actionTypes.FETCH_SEARCH_ITEM_REQUEST:{
            return {...state,loading:true}
        }
        case actionTypes.FETCH_SEARCH_ITEM_SUCCESS:{
            return {...state,item:action.payload,loading:false}
        }
        case actionTypes.FETCH_SEARCH_ITEM_FAILURE:{
            return {...state,error:action.payload,loading:false}
        }
        default:{
            return state;
        }
    }
}