/**
 * Created by zizhangai on 5/22/17.
 */
import React, { Component } from 'react';
import { ECGChart as Chart } from '@ihealth/ihcharts';

class ECGChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
  };
  setData = (newData) => {
    this.setState((prev) => newData);
  };
  render() {
    return (
      <Chart {...this.state} />
    );
  };
}

export default ECGChart;

