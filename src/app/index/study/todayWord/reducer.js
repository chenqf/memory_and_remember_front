// @flow Created by 陈其丰 on 2018/11/15.

import * as actionTypes from './actionTypes';

const defaultState = {
    items:[],
    count:0,
    over:false
};
export default (state = defaultState,action)=>{
    switch (action.type){
        case actionTypes.QUERY_LIST:{
            return {...state,items:action.items,count:action.count || action.items.length,over:true}
        }
        case actionTypes.UPDATE_ITEM:{
            return {...state,items:state.items.map((i)=>i.id === action.item.id ? action.item : i)}
        }
        case actionTypes.DELETE_ITEM:{
            return {...state,count:state.count - 1,items:state.items.filter((i)=>i.id !== action.id)}
        }
        case actionTypes.INSERT_ITEM:{
            return {...state,count:state.count + 1,items:[action.item,...state.items]}
        }
        default:{
            return state;
        }
    }
}