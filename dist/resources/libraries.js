"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestValidation = require("../middleware/request-validation");

var _requestValidation2 = _interopRequireDefault(_requestValidation);

var _moovly = require("../moovly");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPersonalLibrary = function getPersonalLibrary(id) {
  return fetch(_moovly.API_URL + "/api2/v1/user/me/personal-library", {
    method: 'GET',
    headers: {
      Authorization: "Bearer " + _moovly.TOKEN
    }
  }).then(_requestValidation2.default).then(function (response) {
    return response.json();
  });
};

var Libraries = {
  getPersonalLibrary: getPersonalLibrary
};

exports.default = Libraries;