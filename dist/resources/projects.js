"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestValidation = require("../middleware/request-validation");

var _requestValidation2 = _interopRequireDefault(_requestValidation);

var _moovly = require("../moovly");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get = function get(id) {
  return fetch(_moovly.API_URL + "/api2/v1/projects/" + id, {
    method: 'GET',
    headers: {
      Authorization: "Bearer " + _moovly.TOKEN
    }
  }).then(_requestValidation2.default).then(function (response) {
    return response.json();
  });
};

var list = function list() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'unarchived';

  if (!(['archived', 'unarchived', 'all'].indexOf(filter) !== -1)) {
    throw new Error('The given filter is not supported by the list call. Please us "archived", "unarchived", "all"');
  }

  return fetch(_moovly.API_URL + "/api2/v1/projects?filter=" + filter, {
    method: 'GET',
    headers: {
      Authorization: "Bearer " + _moovly.TOKEN
    }
  }).then(_requestValidation2.default).then(function (response) {
    return response.json();
  });
};

var Projects = {
  get: get,
  list: list
};

exports.default = Projects;