// @flow Created by 陈其丰 on 2018/11/15.


import * as actionTypes from './actionTypes';

const defaultState = {
    item:{}
};
export default (state = defaultState,action)=>{
    switch (action.type){
        case actionTypes.UPDATE_ITEM:{
            return {item:action.item}
        }
        default:{
            return state;
        }
    }
}