import { renderCards } from './picture.js';
import { uploadImage } from './upload-modal.js';
import { getData } from './api.js';


getData().then((response) => {
  renderCards(response);
});

uploadImage();

