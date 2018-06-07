"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _requestValidation = require("../middleware/request-validation");

var _requestValidation2 = _interopRequireDefault(_requestValidation);

var _moovly = require("../moovly.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VIDEO_EXTENSIONS = ['mkv', 'flv', 'wmv', 'mp4', 'm4v', 'mpeg', 'avi', 'webm'];

var SUPPORTED_EXTENSIONS = ['mkv', 'flv', 'wmv', 'mp4', 'm4v', 'mpeg', 'avi', 'webm', 'gif', 'jpeg', 'jpg', 'png', 'flac', 'm4a', 'mp3', 'wav', 'ogg', 'wma'];

var get = function get(id) {
  return fetch(_moovly.API_URL + "/api2/v1/objects/" + id, {
    method: 'GET',
    headers: {
      Authorization: "Bearer " + _moovly.TOKEN
    }
  }).then(_requestValidation2.default).then(function (response) {
    return response.json();
  });
};

/**
 * @param <FileUpload> file The result of a input type="file" (found in event.target.files)
 *
 * @returns {Promise<any>}
 */
var upload = function upload(file) {
  var _file$type$split = file.type.split('/'),
      _file$type$split2 = _slicedToArray(_file$type$split, 2),
      type = _file$type$split2[0],
      extension = _file$type$split2[1];

  if (!(SUPPORTED_EXTENSIONS.indexOf(extension) !== -1)) {
    throw new Error('The extension ' + extension + ' is not supported in the file upload');
  }

  if (type === 'video') {
    return createSignedUrl(file).then(uploadVideo);
  }

  uploadAsset(file);
};

var trim = function trim(id, start, end) {
  throw new Error('Not yet implemented');

  var request = {
    modification: 'trim',
    options: {
      'start': start,
      'end': end
    }
  };

  return fetch(_moovly.API_URL + "/api2/v1/objects/" + id + "/modifications", {
    method: 'POST',
    headers: {
      Authorization: "Bearer " + _moovly.TOKEN
    },
    body: JSON.stringify(request)
  }).then(_requestValidation2.default).then(function (response) {
    return response.json();
  });
};

var uploadAsset = function uploadAsset(file) {
  var formData = new FormData();

  formData.append('files', file, file.name);

  return fetch("https://api.moovly.com/api2/v1/objects/upload", {
    method: 'POST',
    headers: {
      Authorization: "Bearer " + undefined.props.token
    },
    body: formData
  }).then(_requestValidation2.default).then(function (response) {
    return response.json();
  });
};

var createSignedUrl = function createSignedUrl(file) {
  var formData = new FormData();

  formData.append('filename', file.name);

  fetch("https://api.moovly.com/api2/v1/objects/upload/video-url", {
    method: 'POST',
    headers: {
      Authorization: "Bearer " + undefined.props.token
    },
    body: formData
  }).then(_requestValidation2.default).then(function (response) {
    return response.json();
  });
};

var uploadVideo = function uploadVideo(response) {
  return fetch(response.url, {
    method: 'PUT',
    body: undefined.state.file
  }).then(_requestValidation2.default).then(function () {
    return response.data;
  });
};

var Assets = {
  get: get,
  upload: upload,
  trim: trim
};

exports.default = Assets;