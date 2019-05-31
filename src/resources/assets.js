import RequestValidator from "../middleware/request-validation";
import { API_URL, TOKEN } from "../moovly.js";

const VIDEO_EXTENSIONS = [
  'mkv',
  'flv',
  'wmv',
  'mp4',
  'm4v',
  'mpeg',
  'avi',
  'webm',
];

const SUPPORTED_EXTENSIONS = [
  'mkv',
  'flv',
  'wmv',
  'mp4',
  'm4v',
  'mpeg',
  'avi',
  'webm',
  'gif',
  'jpeg',
  'jpg',
  'png',
  'flac',
  'm4a',
  'mp3',
  'wav',
  'ogg',
  'wma',
];

const get = id =>
{
  return fetch(`${API_URL}/api2/v1/objects/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
    .then(RequestValidator)
    .then(response => response.json())
};

/**
 * @param <FileUpload> file The result of a input type="file" (found in event.target.files)
 *
 * @returns {Promise<any>}
 */
const upload = file =>
{
  const [type, extension] = file.type.split('/');

  if (!SUPPORTED_EXTENSIONS.includes(extension)) {
    throw new Error('The extension ' + extension + ' is not supported in the file upload');
  }

  if (type === 'video') {
    return createSignedUrl(file).then(uploadVideo);
  }

  uploadAsset(file);
};

const trim = (id,  start, end) =>
{
  throw new Error('Not yet implemented');

  const request = {
    modification: 'trim',
    options: {
      'start': start,
      'end': end,
    }
  };

  return fetch(`${API_URL}/api2/v1/objects/${id}/modifications`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify(request)
  })
    .then(RequestValidator)
    .then(response => response.json())
    ;
};

const uploadAsset = file =>
{
  let formData = new FormData();

  formData.append('files', file, file.name);

  return fetch("https://api.moovly.com/api2/v1/objects/upload", {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${this.props.token}`,
    },
    body: formData
  })
    .then(RequestValidator)
    .then(response => response.json())
  ;
};

const createSignedUrl = file =>
{
  const formData = new FormData();

  formData.append('filename', file.name);

  fetch("https://api.moovly.com/api2/v1/objects", {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${this.props.token}`,
    },
    body: formData
  })
    .then(RequestValidator)
    .then(response => response.json())
  ;
};

const uploadVideo = response =>
{
  return fetch(response.url, {
    method: 'PUT',
    body: this.state.file
  })
    .then(RequestValidator)
    .then(() => response.data)
  ;
};

const Assets = {
  get,
  upload,
  trim
};

export default Assets;
