// @flow Created by 陈其丰 on 2018/11/15.

import {
    //今日单词
    QUERY_TODAY_WORD_LIST,
    DELETE_TODAY_WORD_ITEM,
    UPDATE_TODAY_WORD_ITEM,
    INSERT_TODAY_WORD_ITEM
} from './actionTypes';

const defaultState = {
    items:[],
    count:0,
    over:false
};
export default (state = defaultState,action)=>{
    switch (action.type){
        case QUERY_TODAY_WORD_LIST:{
            return {...state,items:action.items,count:action.count || action.items.length,over:true}
        }
        case UPDATE_TODAY_WORD_ITEM:{
            return {...state,items:state.items.map((i)=>i.id === action.item.id ? action.item : i)}
        }
        case DELETE_TODAY_WORD_ITEM:{
            return {...state,count:state.count - 1,items:state.items.filter((i)=>i.id !== action.id)}
        }
        case INSERT_TODAY_WORD_ITEM:{
            return {...state,count:state.count + 1,items:[action.item,...state.items]}
        }
        default:{
            return state;
        }
    }
}