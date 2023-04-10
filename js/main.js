import { uploadImage } from './upload-modal.js';
import { getData } from './api.js';
import { showFilterContainer } from './filter.js';
import { showAlert } from './util.js';
import { ERROR_MESSAGE } from './constant.js';

getData()
  .then((response) => {
    if(response.ok){
      return response.json();
    } else {
      showAlert(ERROR_MESSAGE);
    }
  })
  .then((data) => {
    showFilterContainer(data);
  })
  .catch((err) => {
    showAlert(err.message);
  });

uploadImage();

