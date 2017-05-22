/**
 * Created by zizhangai on 5/7/17.
 */
var phantom = require('phantom');
var _ph, _page;

module.exports = function(p) {
  // process.env.TZ = 'Europe/Berlin'; this will affect the whole node process.
  return phantom.create([])
    .then(function (instance) {
      _ph = instance;
      return _ph.createPage();
    }).then(function (page) {
      _page = page;
      return _page.open(__dirname + '/static/index.html')
    }).then(function () {
      return _page.property('paperSize', {
        format: 'A4',
        orientation: 'portrait',
        margin: {'top': '0.5cm', 'left': '0.5in', 'bottom': '0.5cm', 'right': '0.5in'},
        header: {
          height: "3cm",
          contents: _ph.callback(function() { return "<div style='font-size:12px'>This is a sample header</div>"; })
        },
        footer: {
          height: "1cm",
          contents: _ph.callback(function (pageNum, numPages) {
            return [
              "<div style='display:-webkit-box;display:-webkit-flex;display: flex;-webkit-justify-content:space-between;justify-content:space-between;'>",
              "<div>",
              "<div style='font-family: sans-serif; font-size: 8px; line-height: 1.8em;font-style: italic;'>",
              "Disclaimer: Information here is accurate as of the date of creation and is meant to serve as a guide.</div>",
              "<div style='font-family: sans-serif; font-size: 8px;font-style: italic; margin: -3px 0 0 0'>",
              "Further details can be found in VSM system.</div>",
              "</div>",
              "<div style='font-family: sans-serif;font-size: 10px'>Page " + pageNum + " of " + numPages + "</div>",
              "</div>"
            ].join('');
          })
        }
      });
    })
    .then(function() {
      return _page.evaluate(function(props) {
        report.setHeader(props.header);
      }, p)
    })
    .then(function () {
      return _page.render(__dirname + '/output/' + 'Report.pdf');
    }).then(function () {
      return _ph.exit();
    }).then(function () {
      return __dirname;
    }).catch(function (err) {
      console.log(err);
      return false;
    });
};
