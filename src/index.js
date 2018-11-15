import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss'
import './style/cover.scss'
import App from './app/index';
import { Provider } from 'react-redux'
import store from './store';
import registerServiceWorker from './registerServiceWorker';




// 处理url 参数 npm install query-string

ReactDOM.render(  <Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

