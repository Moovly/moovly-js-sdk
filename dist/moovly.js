'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sdk = exports.setToken = exports.TOKEN = exports.API_URL = undefined;

var _es6Promise = require('es6-promise');

require('isomorphic-fetch');

var _assets = require('./resources/assets');

var _assets2 = _interopRequireDefault(_assets);

var _projects = require('./resources/projects');

var _projects2 = _interopRequireDefault(_projects);

var _users = require('./resources/users');

var _users2 = _interopRequireDefault(_users);

var _jobs = require('./resources/jobs');

var _jobs2 = _interopRequireDefault(_jobs);

var _libraries = require('./resources/libraries');

var _libraries2 = _interopRequireDefault(_libraries);

var _templates = require('./resources/templates');

var _templates2 = _interopRequireDefault(_templates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = exports.API_URL = 'https://api.moovly.com';
var TOKEN = exports.TOKEN = null;

(0, _es6Promise.polyfill)();

var setToken = exports.setToken = function setToken(token) {
  exports.TOKEN = TOKEN = token;
};

var Meta = {
  version: '1.0RC-beta'
};

var Auth = {
  setToken: setToken
};

var Embeds = {};

var sdk = exports.sdk = {
  Assets: _assets2.default,
  Projects: _projects2.default,
  Users: _users2.default,
  Jobs: _jobs2.default,
  Libraries: _libraries2.default,
  Templates: _templates2.default,
  Meta: Meta,
  Auth: Auth,
  Embeds: Embeds
};