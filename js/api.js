import { GET_DATA, POST_DATA } from './constant.js';

const getData = () =>
  fetch(GET_DATA);

const postData = (body) =>
  fetch(POST_DATA, {
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    body
  });

export { getData, postData };
