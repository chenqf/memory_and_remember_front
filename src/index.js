import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss'
import './style/cover.scss'
import App from './app/index';
import { Provider } from 'react-redux'
import {createStore,combineReducers} from 'redux';
import {reducer as examWordReducer} from './app/index/exam/index';
import {reducer as todayWordReducer} from './app/index/study/todayWord/index';
import {reducer as searchWordReducer} from './app/index/study/searchWord/index';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(combineReducers({
    examWord:examWordReducer,
    todayWord:todayWordReducer,
    searchWord:searchWordReducer,
}));

// 处理url 参数 npm install query-string

ReactDOM.render(  <Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

