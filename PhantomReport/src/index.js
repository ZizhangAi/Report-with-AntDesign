/**
 * Created by zizhangai on 5/7/17.
 */
var generateReport = require('./generateReport');

generateReport({ header: 'My Report' }).then(function(value) {
  console.log('Done');
});
