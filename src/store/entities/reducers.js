// @flow Created by 陈其丰 on 2018/11/19.

import {combineReducers} from 'redux';
import {reducer as wordReducer} from './word/index';



const reducer = combineReducers({
    word:wordReducer
});

export default reducer