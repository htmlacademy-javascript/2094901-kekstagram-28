import { isEscapeKey } from './util.js';
import { validateForm } from './validation.js';
import { resetSlider } from './slider.js';
import { resetScale } from './scale.js';
import { postData } from './api.js';
import { onSuccess, onFail } from './popups.js';
import { submitButtonText } from './constant.js';

const uploadModal = document.querySelector('.img-upload__overlay');
const uploadButton = document.querySelector('#upload-file');
const uploadCancel = uploadModal.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');
const imagePreview = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');
const submitButton = document.querySelector('.img-upload__submit');
const body = document.body;

const hideModal = () => {
  uploadModal.classList.add('hidden');
  uploadForm.reset();
  body.classList.remove('modal-open');
  uploadButton.value = '';
  document.removeEventListener('keydown', onEscCloseModal);
};

const disableSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = submitButtonText.SENDING;
};

const activateSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = submitButtonText.IDLE;
};

const onSubmitForm = (evt) => {
  evt.preventDefault();
  if (validateForm()) {
    disableSubmitButton();
    postData(new FormData(uploadForm))
      .then((response) => {
        if (response.ok) {
          hideModal();
          onSuccess();
        } else {
          onFail();
          document.removeEventListener('keydown', onEscCloseModal);
        }
      })
      .catch(() => {
        onFail();
        document.removeEventListener('keydown', onEscCloseModal);
      })
      .finally(() => {
        activateSubmitButton();
      });
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
    document.addEventListener('keydown', onEscCloseModal);
    changePreview();
    resetSlider();
    resetScale();
  });
};

uploadCancel.addEventListener('click', () => {
  hideModal();
});

function onEscCloseModal(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (!(evt.target.classList.contains('text__hashtags') || evt.target.classList.contains('text__description'))) {
      hideModal();
    }
  }
}

const uploadImage = () => {
  showUploadModal();
};

export { uploadImage, hideModal, onEscCloseModal };
