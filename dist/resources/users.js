"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestValidation = require("../middleware/request-validation");

var _requestValidation2 = _interopRequireDefault(_requestValidation);

var _moovly = require("../moovly");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMe = function getMe() {
  return fetch(_moovly.API_URL + "/api2/v1/users/me", {
    method: 'GET',
    headers: {
      Authorization: "Bearer " + _moovly.TOKEN
    }
  }).then(_requestValidation2.default).then(function (response) {
    return response.json();
  }).then(function (response) {
    return {
      id: response.id,
      uuid: response.uuid,
      locked: response.locked
    };
  });
};

var Users = {
  getMe: getMe
};

exports.default = Users;