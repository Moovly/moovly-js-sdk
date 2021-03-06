const RequestValidator = (response) =>
{
  if (!response.ok) {
    switch (response.status) {
      case 404:
        throw new Error('The resource was not found.');
      case 403:
        throw new Error('Your token was invalid.');
      case 400:
        throw new Error('You sent a bad request.');
    }
  }

  return response;
};

export default RequestValidator;