// @flow Created by 陈其丰 on 2018/11/19.

import {combineReducers} from 'redux';
import {reducer as entitiesReducer} from './entities/index';

import {reducer as examWordReducer} from '../app/index/exam/index';
import {reducer as studyReducer} from '../app/index/study/index';


const reducer = combineReducers({
    entities:entitiesReducer,// 范式化数据结构
    study:studyReducer, // 首页下 学习
    examWord:examWordReducer, // 首页下 测验
});

export default reducer