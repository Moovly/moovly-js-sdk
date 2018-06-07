import RequestValidator from "../middleware/request-validation";
import {API_URL, TOKEN} from "../moovly";

const getMe = () =>
{
  return fetch(`${API_URL}/user/v1/users/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
    .then(RequestValidator)
    .then(response => response.json())
    .then(response => {
      return {
        id: response.id,
        uuid: response.uuid,
        locked: response.locked,
      }
    })
    ;
};

const Users = {
  getMe
};

export default Users;