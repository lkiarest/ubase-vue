'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extractTextWebpackPlugin = require('extract-text-webpack-plugin');

var _extractTextWebpackPlugin2 = _interopRequireDefault(_extractTextWebpackPlugin);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (path) {
  var loaders = {};

  loaders.vueappcore = {
    test: /vue-appcore\.js$/i,
    exclude: [/\/pages\//],
    loader: 'file?name=[name].js'
  };

  loaders.js = {
    test: /\.js$/i,
    include: path.resolve(_config2.default.src),
    exclude: [/\/node_modules\//, /\/bower_components\//],
    loader: 'babel'
  };

  loaders.template = {
    test: /index\.html$/i,
    exclude: [/\/pages\//],
    loader: 'file?name=[name].html'
  };

  loaders.config = {
    test: /config\.json$/i,
    exclude: [/\/pages\//, /\/components\//],
    loader: 'file?name=[name].json'
  };

  loaders.html = {
    test: /\.html$/i,
    exclude: [/index\.html/],
    loader: 'html'

  };

  loaders.vue = {
    test: /\.vue$/i,
    include: path.resolve(_config2.default.src),
    loader: 'vue'

  };

  loaders.promise = {
    test: /\.js$/i,
    include: [/pages/],
    exclude: loaders.js.exclude,
    loaders: ['promise?global,[name].promise', 'babel']
  };

  loaders.sassUsable = {
    test: /\.useable\.(scss|sass)$/i,
    loaders: ['style/useable', 'css', 'postcss', 'sass']
  };

  loaders.sass = {
    test: /\.(scss|sass)$/i,
    exclude: loaders.sassUsable.test,
    loader: _extractTextWebpackPlugin2.default.extract('style', loaders.sassUsable.loaders.slice(1).join('!'))
  };

  loaders.lessUsable = {
    test: /\.useable\.less$/i,
    loaders: ['style/useable', 'css', 'postcss', 'less']
  };

  loaders.less = {
    test: /\.less$/i,
    exclude: loaders.lessUsable.test,
    loader: _extractTextWebpackPlugin2.default.extract('style', loaders.lessUsable.loaders.slice(1).join('!'))
  };

  loaders.fonts = {
    test: /.*\.(ttf|eot|woff|woff2|svg)(\?.*)?$/i,
    include: /fonts/,
    loader: 'url',
    query: {
      limit: 0.01 * 1024,
      name: _config2.default.assets.fonts + '/[name]-[hash:5].[ext]'
    }
  };

  loaders.url = {
    test: /.*\.(gif|png|jpe?g|svg)$/i,
    exclude: [loaders.fonts.include, /images/],
    loader: 'url',
    query: {
      limit: 0.01 * 1024,
      name: _config2.default.isDevelope ? _config2.default.assets.images + '/[name].[ext]' : _config2.default.assets.images + '/[name]-[hash:5].[ext]'
    }
  };

  loaders.svg = {
    test: /\.svg$/,
    include: /images/,
    loader: 'svg-sprite?' + JSON.stringify({
      name: '[name]'
    })
  };

  return [loaders.vueappcore, loaders.vue, loaders.js, loaders.template, loaders.config, loaders.html, loaders.sass, loaders.sassUsable, loaders.less, loaders.lessUsable, loaders.url, loaders.fonts, loaders.svg];
};