import { getPhotos } from './data.js';
import { PHOTOS_NUMBER } from './constant.js';

// Находим место для размещения фотографий.
const picturesContainer = document.querySelector('.pictures');
// Находим шаблон и его содержимое.
const pictureTemplate = document.querySelector('#picture').content
  .querySelector('.picture');

const addData = getPhotos(PHOTOS_NUMBER);
const newImage = document.createDocumentFragment();
addData.forEach(({ url, comments, likes }) => {
  const cloneImage = pictureTemplate.cloneNode(true);
  cloneImage.querySelector('.picture__img').src = url;
  cloneImage.querySelector('.picture__comments').textContent = comments.length;
  cloneImage.querySelector('.picture__likes').textContent = likes;
  picturesContainer.append(cloneImage);
}
);
picturesContainer.append(newImage);
