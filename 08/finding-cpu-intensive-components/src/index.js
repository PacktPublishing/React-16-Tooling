import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const update = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

setInterval(update, 5000);
update();

registerServiceWorker();
