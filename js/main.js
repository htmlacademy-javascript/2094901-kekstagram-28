import { renderCards } from './picture.js';
import { uploadImage } from './upload-modal.js';
import { getData } from './api.js';
import { showFilterContainer } from './filter.js';


getData().then((response) => {
  showFilterContainer();
  renderCards(response);
});

uploadImage();

