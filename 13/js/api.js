import {METHOD, URL, ROUTE} from './constants';

const request = (route, method, body = null) =>
  fetch(`${URL}${route}`, {
    method: method,
    body,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    });

const getData = (onError) =>
  request(ROUTE.GET_DATA, METHOD.GET)
    .catch(() => onError());

const sendData = (body) =>
  request(ROUTE.SEND_DATA, METHOD.POST, body)
    .catch(() => {
      throw new Error();
    });

export {getData, sendData};
