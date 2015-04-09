var pull = require('pull-stream');

module.exports = function delay(rate) {
  var ts = pull.asyncMap(function (v, cb) {
    setTimeout(function () {
      cb(null, v);
    }, rate);
  });
  return ts;
};

