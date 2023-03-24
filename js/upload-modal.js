import { isEscapeKey } from './util.js';
import { validateForm } from './validation.js';

const uploadModal = document.querySelector('.img-upload__overlay');
const uploadButton = document.querySelector('#upload-file');
const uploadCancel = uploadModal.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');
const imagePreview = document.querySelector('.img-upload__preview img');

const body = document.body;

const onSubmitFormHandler = (evt) => {
  if (!validateForm()) {
    evt.preventDefault();
  }
};

uploadForm.addEventListener('submit', onSubmitFormHandler);

const showUploadModal = () => {
  uploadButton.addEventListener('change', () => {
    uploadModal.classList.remove('hidden');
    body.classList.add('modal-open');
    const fileImage = uploadButton.files[0];
    imagePreview.src = URL.createObjectURL(fileImage);
  });
};

uploadCancel.addEventListener('click', () => {
  uploadModal.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadButton.value = '';
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (!(evt.target.classList.contains('text__hashtags') || evt.target.classList.contains('text__description'))) {
      uploadModal.classList.add('hidden');
      body.classList.remove('modal-open');
      uploadButton.value = '';
    }

  }
});

const uploadImage = () => {
  showUploadModal();
};

export { uploadImage };
