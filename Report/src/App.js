import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
import ECGChart from './components/ECGChart'

import Header from './components/Header'
const actions = {};
class App extends Component {
  componentDidMount() {
    actions.setHeader = this._header.setData;
    actions.setECGChart = this._ecgChart.setData;
  }
  render() {
    return (
      <div className="App">
        <Header ref={(node) => this._header = node } />
        <Button type="primary" >Hey</Button>
        <ECGChart ref={(node) => this._ecgChart = node }/>
      </div>
    );
  }
}

export default App;
export { actions };

