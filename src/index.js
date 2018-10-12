import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss'
import './style/cover.scss'
import App from './app/index';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
