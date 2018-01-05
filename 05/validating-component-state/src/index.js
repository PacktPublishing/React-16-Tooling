// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');

if (!(root instanceof Element)) {
  throw 'Invalid root';
}

ReactDOM.render(
  <App />,
  root
);

registerServiceWorker();
