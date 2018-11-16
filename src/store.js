// @flow Created by 陈其丰 on 2018/11/15.

import {createStore,combineReducers,applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import {reducer as examWordReducer} from './app/index/exam/index';
import {reducer as studyReducer} from './app/index/study/index';

const reducer = combineReducers({
    study:studyReducer, // 首页下 学习
    examWord:examWordReducer, // 首页下 测验
});
const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

export default store;