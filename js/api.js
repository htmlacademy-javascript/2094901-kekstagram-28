import { GET_DATA, POST_DATA } from './constant.js';
import { onSuccess, onFail } from './popups.js';
import { hideModal } from './upload-modal.js';
import { showAlert } from './util.js';

const getData = () =>
  fetch(GET_DATA)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Не удалось получить данные');
      }
      return response.json();

    })
    .catch((err) => {
      showAlert(err.message);
    });

const postData = (body) =>
  fetch(POST_DATA, {
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    body
  })
    .then((response) => {
      if (!response.ok) {
        onFail();
      } else {
        hideModal();
        onSuccess();
      }
    })
    .catch(() => {
      onFail();
    });

export { getData, postData };
