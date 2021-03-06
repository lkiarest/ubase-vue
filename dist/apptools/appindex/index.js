'use strict';

var _entry = require('{{entry}}');

var _entry2 = _interopRequireDefault(_entry);

var _routes = require('{{routes}}');

var _routes2 = _interopRequireDefault(_routes);

require('{{config}}');

var _store = require('{{store}}');

var store = _interopRequireWildcard(_store);

var _globalStore = require('{{globalStore}}');

var globalStore = _interopRequireWildcard(_globalStore);

require('{{indexHtml}}');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootRoute = '{{rootRoute}}';

var STORE = {
  state: {},
  actions: [],
  mutations: [],
  modules: { app: store, global: globalStore }
};

Object.keys(_routes2.default).forEach(function (key) {
  _routes2.default[rootRoute + key] = _routes2.default[key];
  delete _routes2.default[key];
});

window.STARTAPP(_entry2.default, STORE, _routes2.default);