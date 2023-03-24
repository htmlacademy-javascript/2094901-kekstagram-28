import { isCheckLength } from './util.js';
import { MAX_DESCRIPTON_LENGTHS, HASHTAG_MAX_QUANTITY } from './constant.js';

const uploadForm = document.querySelector('.img-upload__form');
const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'form__error',

}, false);

const validateDescription = (value) => isCheckLength(value, MAX_DESCRIPTON_LENGTHS);

const validateHashtags = (value) => {
  const hashtags = /^#[a-zа-яё0-9]{1,19}$/i;
  const arrayTag = value.replace(/\s+/g, ' ').trim().split(' ');
  const validateTag = arrayTag.every((tag) => hashtags.test(tag));
  return validateTag;
};

const checkSimilarHashtags = (value) => {
  const arrayTag = value.replace(/\s+/g, ' ').trim().split(' ');
  const createUniqTags = Array.from(new Set(arrayTag));
  return arrayTag.length === createUniqTags.length;
};

const checkQuantityHashtags = (value) => {
  const arrayTag = value.replace(/\s+/g, ' ').trim().split(' ');
  const validateTag = arrayTag.length <= HASHTAG_MAX_QUANTITY;
  return validateTag;
};

pristine.addValidator(
  textDescription,
  validateDescription,
  `Описание не должно превышать ${MAX_DESCRIPTON_LENGTHS} символов`,
);

pristine.addValidator(
  textHashtags,
  validateHashtags,
  'Неправильный Хэштэг',
);

pristine.addValidator(
  textHashtags,
  checkSimilarHashtags,
  'Хэштэги не могут повторяться',
);

pristine.addValidator(
  textHashtags,
  checkQuantityHashtags,
  `Не более ${HASHTAG_MAX_QUANTITY} Хэштэгов`,
);

const validateForm = () => pristine.validate();

export { validateForm };
