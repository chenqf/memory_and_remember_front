// @flow Created by 陈其丰 on 2018/11/14.


import * as actionTypes from './actionTypes';

const defaultState = {
    items:[],
    count:0
};
export default (state = defaultState,action)=>{
    switch (action.type){
        case actionTypes.UPDATE_WORD_LIST:{
            return {...state,items:action.items,count:action.count || action.items.length}
        }
        case actionTypes.UPDATE_WORD_ITEM:{
            return {...state,items:state.items.map((i)=>i.id === action.item.id ? action.item : i)}
        }
        case actionTypes.DELETE_WORD_ITEM:{
            return {...state,count:state.count - 1,items:state.items.filter((i)=>i.id !== action.id)}
        }
        default:{
            return state;
        }
    }
}