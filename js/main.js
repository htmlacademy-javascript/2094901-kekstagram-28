import { getPhotos } from './data.js';
import { PHOTOS_NUMBER } from './constant.js';
import { renderCards } from './picture.js';

renderCards(getPhotos(PHOTOS_NUMBER));
