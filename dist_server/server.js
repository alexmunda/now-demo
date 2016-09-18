'use strict';

var _appRootPath = require('app-root-path');

var _appRootPath2 = _interopRequireDefault(_appRootPath);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = _appRootPath2.default.path;


var app = (0, _express2.default)();

app.use('/dist', _express2.default.static(path + '/dist'));

app.get('/', function (req, res) {
  return res.sendFile(path + '/src/index.html');
});

app.listen(8080, function () {
  return console.log('Listening on port 8080');
});