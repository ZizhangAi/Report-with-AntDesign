import React from 'react';
import ReactDOM from 'react-dom';
import App, { actions } from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

module.exports = {
  setHeader      : actions.setHeader,
  setECGChart    : actions.setECGChart
};


