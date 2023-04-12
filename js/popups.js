import { isEscapeKey } from './util.js';
import { onEscCloseModal } from './upload-modal.js';

const succesTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const onButtonClosePopup = (evt) => {
  if (evt.target.closest('section').classList.contains('success')) {
    evt.target.closest('section').remove();
    removeEventListener();
  } else if (evt.target.closest('section').classList.contains('error')) {
    evt.target.closest('section').remove();
    removeEventListener();
    document.body.addEventListener('keydown', onEscCloseModal);
  }
};

const onClickClosePopup = (evt) => {
  if (!evt.target.closest('.success__inner')) {
    if (document.querySelector('.success')) {
      document.querySelector('.success').remove();
      removeEventListener();
    } else if (!evt.target.closest('.error__inner')) {
      document.querySelector('.error').remove();
      removeEventListener();
      document.body.addEventListener('keydown', onEscCloseModal);
    }
  }
};

const onEscClosePopup = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (document.querySelector('.success')) {
      document.querySelector('.success').remove();
      removeEventListener();
    } else {
      document.querySelector('.error').remove();
      removeEventListener();
      document.body.addEventListener('keydown', onEscCloseModal);
    }
  }
};

function removeEventListener() {
  document.body.removeEventListener('click', onClickClosePopup,);
  document.body.removeEventListener('keydown', onEscClosePopup,);
  document.body.removeEventListener('keydown', onEscCloseModal,);
}

const onSuccess = () => {
  const successPopup = succesTemplate.cloneNode(true);
  successPopup.querySelector('.success__button').addEventListener('click', onButtonClosePopup);
  document.removeEventListener('keydown', onEscCloseModal);
  document.body.addEventListener('keydown', onEscClosePopup,);
  document.body.addEventListener('click', onClickClosePopup,);
  document.body.append(successPopup);
};

const onFail = () => {
  const errorPopup = errorTemplate.cloneNode(true);
  errorPopup.querySelector('.error__button').addEventListener('click', onButtonClosePopup);
  document.body.removeEventListener('keydown', onEscCloseModal);
  document.body.addEventListener('keydown', onEscClosePopup,);
  document.body.addEventListener('click', onClickClosePopup,);
  document.body.append(errorPopup);
};

export { onSuccess, onFail, onEscClosePopup };
