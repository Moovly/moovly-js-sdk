import RequestValidator from "../middleware/request-validation";
import {API_URL, TOKEN} from "../moovly";

const get = id =>
{
  return fetch(`${API_URL}/api2/v1/templates/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
    .then(RequestValidator)
    .then(response => response.json())
  ;
};

const list = () =>
{
  return fetch(`${API_URL}/api2/v1/templates`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
    .then(RequestValidator)
    .then(response => response.json())
  ;
};

const create = projectId =>
{
  return fetch(`${API_URL}/api2/v1/templates`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`
    },
    body: {
      moov_id: projectId
    }
  })
    .then(RequestValidator)
    .then(response => response.json())
  ;
};

const Templates = {
  get,
  list,
  create,
};

export default Templates;