import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

console.log("Hello Andres! 2");

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
