import { isEscapeKey } from './util.js';
import { onEscCloseModal } from './upload-modal.js';

const succesTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const onCloseButtonClick = (evt) => {
  if (evt.target.closest('section').classList.contains('success') || evt.target.closest('section').classList.contains('error')) {
    evt.target.closest('section').remove();
    document.addEventListener('keydown', onEscCloseModal);
  }
};

const onEscClosePopup = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (document.querySelector('.success')) {
      document.querySelector('.success').remove();
    } else {
      document.addEventListener('keydown', onEscCloseModal);
      document.querySelector('.error').remove();
    }
  }
};

const onClickClosePopup = (evt) => {
  if (evt.target.closest('body')) {
    if (document.querySelector('.success')) {
      document.querySelector('.success').remove();
    } else {
      document.addEventListener('keydown', onEscCloseModal);
      document.querySelector('.error').remove();
    }
  }
};

const onSuccess = () => {
  const successPopup = succesTemplate.cloneNode(true);
  document.removeEventListener('keydown', onEscCloseModal);
  successPopup.querySelector('.success__button').addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onEscClosePopup, {once: true});
  document.addEventListener('click', onClickClosePopup,{once: true});
  document.body.append(successPopup);
};

const onFail = () => {
  const errorPopup = errorTemplate.cloneNode(true);
  errorPopup.querySelector('.error__button').addEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onEscCloseModal);
  document.addEventListener('keydown', onEscClosePopup, {once: true});
  document.addEventListener('click', onClickClosePopup, {once: true});
  document.body.append(errorPopup);
};

export { onSuccess, onFail, onEscClosePopup };
