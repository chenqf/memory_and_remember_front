// @flow Created by 陈其丰 on 2018/11/16.

import {combineReducers} from 'redux';
import {CHANGE_TAB} from './actionTypes';
import {reducer as todayWordReducer} from './todayWord/index';
import {reducer as searchWordReducer} from './searchWord/index';

const defaultState = 0;
export default combineReducers({
    index:(state = defaultState,action)=>{
        switch (action.type) {
            case CHANGE_TAB: {
                return action.index;
            }
            default: {
                return state;
            }
        }
    },
    todayWord:todayWordReducer,
    searchWord:searchWordReducer,
})