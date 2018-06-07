"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestValidation = require("../middleware/request-validation");

var _requestValidation2 = _interopRequireDefault(_requestValidation);

var _moovly = require("../moovly");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get = function get(id) {
  return fetch(_moovly.API_URL + "/api2/v1/jobs/" + id, {
    method: 'GET',
    headers: {
      Authorization: "Bearer " + _moovly.TOKEN
    }
  }).then(_requestValidation2.default).then(function (response) {
    return response.json();
  });
};

var create = function create(templateId, options, values) {
  return fetch("https://api.moovly.com/generator/v1/jobs", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + undefined.props.token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      template_id: templateId,
      options: options,
      values: values
    })
  }).then(_requestValidation2.default).then(function (response) {
    return response.json();
  });
};

var listByTemplate = function listByTemplate(templateId) {
  return fetch(_moovly.API_URL + "/api2/v1/templates/" + templateId + "/jobs", {
    method: 'GET',
    headers: {
      Authorization: "Bearer " + _moovly.TOKEN
    }
  }).then(_requestValidation2.default).then(function (response) {
    return response.json();
  });
};

var listByUser = function listByUser(userId) {
  return fetch(_moovly.API_URL + "/api2/v1/users/" + userId + "/jobs", {
    method: 'GET',
    headers: {
      Authorization: "Bearer " + _moovly.TOKEN
    }
  }).then(_requestValidation2.default).then(function (response) {
    return response.json();
  });
};

var Jobs = {
  get: get,
  create: create,
  listByTemplate: listByTemplate,
  listByUser: listByUser
};

exports.default = Jobs;