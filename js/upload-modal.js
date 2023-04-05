import { isEscapeKey } from './util.js';
import { validateForm } from './validation.js';
import { resetSlider } from './slider.js';
import { postData } from './api.js';

const uploadModal = document.querySelector('.img-upload__overlay');
const uploadButton = document.querySelector('#upload-file');
const uploadCancel = uploadModal.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');
const imagePreview = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');
const body = document.body;

const hideModal = () => {
  uploadModal.classList.add('hidden');
  uploadForm.reset();
  body.classList.remove('modal-open');
  uploadButton.value = '';
};

const onSubmitForm = (evt) => {
  evt.preventDefault();
  if (validateForm()) {
    postData(new FormData(uploadForm)
    );
  }
};

const changePreview = () => {
  const fileImage = uploadButton.files[0];
  imagePreview.src = URL.createObjectURL(fileImage);
  effectsPreview.forEach((preview) => {
    preview.style.backgroundImage = `url(${imagePreview.src})`;
  });
};

uploadForm.addEventListener('submit', onSubmitForm);

const showUploadModal = () => {
  uploadButton.addEventListener('change', () => {
    uploadModal.classList.remove('hidden');
    body.classList.add('modal-open');
    changePreview();
    resetSlider();
  });
};

uploadCancel.addEventListener('click', () => {
  hideModal();
});

const onEscCloseModal = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (!(evt.target.classList.contains('text__hashtags') || evt.target.classList.contains('text__description'))) {
      hideModal();
    }
  }
};

document.addEventListener('keydown', onEscCloseModal);

const uploadImage = () => {
  showUploadModal();
};

export { uploadImage, hideModal, onEscCloseModal };
