import RequestValidator from "../middleware/request-validation";
import {API_URL, TOKEN} from "../moovly";

const get = id =>
{
  return fetch(`${API_URL}/api2/v1/jobs/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
    .then(RequestValidator)
    .then(response => response.json())
    ;
};

const create = (templateId, options, values) =>
{
  return fetch("https://api.moovly.com/generator/v1/jobs", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${this.props.token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      template_id: templateId,
      options,
      values,
    })
  })
    .then(RequestValidator)
    .then(response => response.json())
  ;
};

const listByTemplate = templateId =>
{
  return fetch(`${API_URL}/api2/v1/templates/${templateId}/jobs`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
    .then(RequestValidator)
    .then(response => response.json())
  ;
};

const listByUser = userId =>
{
  return fetch(`${API_URL}/api2/v1/users/${userId}/jobs`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
    .then(RequestValidator)
    .then(response => response.json())
  ;
};

const Jobs = {
  get,
  create,
  listByTemplate,
  listByUser
};

export default Jobs;