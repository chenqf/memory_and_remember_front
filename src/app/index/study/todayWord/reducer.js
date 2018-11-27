// @flow Created by 陈其丰 on 2018/11/15.

import * as actionTypes from './actionTypes';

const defaultState = {
    ids:[],
    loading:false,
    error:null
};
export default (state = defaultState,action)=>{
    switch (action.type){
        case actionTypes.FETCH_QUERY_LIST_REQUEST:{
            return {...state,loading:true,error:null}
        }
        case actionTypes.FETCH_QUERY_LIST_SUCCESS:{
            return {...state,loading:false,ids:action.payload,error:null}
        }
        case actionTypes.FETCH_QUERY_LIST_FAILURE:{
            return {...state,loading:false,error:action.payload}
        }
        case actionTypes.INSERT_ITEM:{
            debugger
            return {...state,ids:[action.payload,...state.ids]}
        }
        default:{
            return state;
        }
    }
}