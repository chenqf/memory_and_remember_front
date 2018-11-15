// @flow Created by 陈其丰 on 2018/11/15.

import {
    UPDATE_SEARCH_WORD,
    DELETE_SEARCH_WORD,
} from './actionTypes';

const defaultState = {
    item:{}
};
export default (state = defaultState,action)=>{
    switch (action.type){
        case UPDATE_SEARCH_WORD:{
            return {item:action.item}
        }
        case DELETE_SEARCH_WORD:{
            return {item:{}}
        }
        default:{
            return state;
        }
    }
}