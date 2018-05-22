import RequestValidator from "../middleware/request-validation";
import {API_URL, TOKEN} from "../moovly";

const get = id =>
{
  return fetch(`${API_URL}/api2/v1/projects/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
    .then(RequestValidator)
    .then(response => response.json())
  ;
};

const list = (filter = 'unarchived') =>
{
  if (!['archived', 'unarchived', 'all'].includes(filter)) {
    throw new Error('The given filter is not supported by the list call. Please us "archived", "unarchived", "all"');
  }

  return fetch(`${API_URL}/api2/v1/projects?filter=${filter}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
    .then(RequestValidator)
    .then(response => response.json())
  ;
};

const Projects = {
  get,
  list,
};

export default Projects;