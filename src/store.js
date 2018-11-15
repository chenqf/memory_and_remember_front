// @flow Created by 陈其丰 on 2018/11/15.

import {createStore,combineReducers,applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger'
import {reducer as examWordReducer} from './app/index/exam/index';
import {reducer as todayWordReducer} from './app/index/study/todayWord/index';
import {reducer as searchWordReducer} from './app/index/study/searchWord/index';

const logger = createLogger();
const reducer = combineReducers({
    examWord:examWordReducer,
    todayWord:todayWordReducer,
    searchWord:searchWordReducer,
});
const store = createStore(
    reducer,
    applyMiddleware(logger)
);

export default store;