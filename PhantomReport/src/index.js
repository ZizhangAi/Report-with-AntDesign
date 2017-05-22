/**
 * Created by zizhangai on 5/7/17.
 */
var generateReport = require('./generateReport');
const data = {
  header: 'My Report',
  ECGData: {
    data: [{date: 1494766666017, value: -2.2}, {date: 1494766670017, value: -1.2}, { date: 1494766676017, value: 2.8}],
    line: {style: {'stroke-width': '5px', 'stroke': 'salmon', 'stroke-dasharray': '5'}},
    margin: { top: 50, right: 50, bottom: 50, left: 50 },
    markers: [{date: 1494766666017, label: 'Exact time of abnormal occurrence'}],
    width: 800,
    upperLeftLabel: "Upper Left",
    upperRightLabel: "Upper Right",
    lowerLeftLabel: "Lower Left",
    lowerRightLabel: "Lower Right",
    legend: "Hey Point"
  }
};
generateReport(data).then(function(value) {
  console.log('Done');
});
