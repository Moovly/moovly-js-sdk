import RequestValidator from "../middleware/request-validation";
import {API_URL, TOKEN} from "../moovly";

const getPersonalLibrary = id =>
{
  return fetch(`${API_URL}/api2/v1/user/me/personal-library`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
    .then(RequestValidator)
    .then(response => response.json())
    ;
};

const Libraries = {
  getPersonalLibrary
};

export default Libraries