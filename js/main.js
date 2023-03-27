import { getPhotos } from './data.js';
import { PHOTOS_NUMBER } from './constant.js';
import { renderCards } from './picture.js';
import { uploadImage } from './upload-modal.js';
import './slider.js';
renderCards(getPhotos(PHOTOS_NUMBER));
uploadImage();
