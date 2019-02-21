import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import Demo from './demo/index.js';

ReactDOM.render((
    <Demo.Context.Test6/>
), document.getElementById('root'));
registerServiceWorker();