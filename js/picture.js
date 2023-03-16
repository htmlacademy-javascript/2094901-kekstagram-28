import { renderModal } from './modal.js';
// Находим место для размещения фотографий.
const picturesContainer = document.querySelector('.pictures');
// Находим шаблон и его содержимое.
const pictureTemplate = document.querySelector('#picture').content
  .querySelector('.picture');

const fragment = document.createDocumentFragment();
const renderCards = (photos) => {
  photos.forEach((photo) => {
    const cloneImage = pictureTemplate.cloneNode(true);
    cloneImage.querySelector('.picture__img').src = photo.url;
    cloneImage.querySelector('.picture__comments').textContent = photo.comments.length;
    cloneImage.querySelector('.picture__likes').textContent = photo.likes;
    fragment.append(cloneImage);
    cloneImage.addEventListener('click', (evt) => {
      evt.preventDefault();
      renderModal(photo);

    });
  }
  );
  picturesContainer.append(fragment);
};

export { renderCards };
