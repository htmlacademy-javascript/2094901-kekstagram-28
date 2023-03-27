import { SCALE_CONTROL_STEP, SCALE_IMAGE_STEP } from './constant.js';

const scaleControl = document.querySelector('.scale__control--value');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const imagePreview = document.querySelector('.img-upload__preview');
const effectsList = document.querySelector('.effects__list');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const valueElement = document.querySelector('.effect-level__value');
let scaleValue = 1.0;
let scaleControlValue = 100;
let stepImageScale = scaleValue;


scaleControl.value = `${scaleControlValue}%`;

const zoomOut = () => {
  const step = scaleControlValue -= SCALE_CONTROL_STEP;
  scaleControl.value = `${step}%`;
  scaleControlBigger.disabled = false;
  const stepImage = stepImageScale -= SCALE_IMAGE_STEP;
  scaleValue = stepImage;
  imagePreview.style.transform = `scale(${scaleValue})`;
  scaleControlSmaller.disabled = step <= 25;
};

scaleControlSmaller.addEventListener('click', zoomOut);

const zoomIn = () => {
  const step = scaleControlValue += SCALE_CONTROL_STEP;
  scaleControl.value = `${step}%`;
  scaleControlSmaller.disabled = false;
  const stepImage = stepImageScale += SCALE_IMAGE_STEP;
  scaleValue = stepImage;
  imagePreview.style.transform = `scale(${scaleValue})`;
  scaleControlBigger.disabled = step >= 100;
};

scaleControlBigger.addEventListener('click', zoomIn);

effectsList.addEventListener('change', (evt) => {
  if (evt.target.closest('input[value="none"]')) {
    effectLevelSlider.classList.add('visually-hidden');
    sliderContainer.classList.add('visually-hidden');
    effectLevelSlider.noUiSlider.on('update', () => {
      imagePreview.style.filter = '';
    });
    imagePreview.classList.remove('effects__preview--chrome');
    imagePreview.classList.remove('effects__preview--sepia');
    imagePreview.classList.remove('effects__preview--marvin');
    imagePreview.classList.remove('effects__preview--phobos');
    imagePreview.classList.remove('effects__preview--heat');
  } else if (evt.target.closest('input[value="chrome"]')) {
    effectLevelSlider.noUiSlider.on('update', () => {
      valueElement.value = effectLevelSlider.noUiSlider.get();
    });
    effectLevelSlider.classList.remove('visually-hidden');
    sliderContainer.classList.remove('visually-hidden');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      connect: 'lower',
    });
    effectLevelSlider.noUiSlider.on('update', () => {
      imagePreview.style.filter = `grayscale(${effectLevelSlider.noUiSlider.get()})`;
    });
    imagePreview.classList.add('effects__preview--chrome');
    imagePreview.classList.remove('effects__preview--sepia');
    imagePreview.classList.remove('effects__preview--marvin');
    imagePreview.classList.remove('effects__preview--phobos');
    imagePreview.classList.remove('effects__preview--heat');
  } else if (evt.target.closest('input[value="sepia"]')) {
    effectLevelSlider.classList.remove('visually-hidden');
    sliderContainer.classList.remove('visually-hidden');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      connect: 'lower',
    });
    effectLevelSlider.noUiSlider.on('update', () => {
      imagePreview.style.filter = `sepia(${effectLevelSlider.noUiSlider.get()})`;
    });
    imagePreview.classList.add('effects__preview--sepia');
    imagePreview.classList.remove('effects__preview--chrome');
    imagePreview.classList.remove('effects__preview--marvin');
    imagePreview.classList.remove('effects__preview--phobos');
    imagePreview.classList.remove('effects__preview--heat');
  } else if (evt.target.closest('input[value="marvin"]')) {
    effectLevelSlider.classList.remove('visually-hidden');
    sliderContainer.classList.remove('visually-hidden');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
      connect: 'lower',
    });
    effectLevelSlider.noUiSlider.on('update', () => {
      imagePreview.style.filter = `invert(${effectLevelSlider.noUiSlider.get()}%)`;
    });
    imagePreview.classList.add('effects__preview--marvin');
    imagePreview.classList.remove('effects__preview--chrome');
    imagePreview.classList.remove('effects__preview--sepia');
    imagePreview.classList.remove('effects__preview--phobos');
    imagePreview.classList.remove('effects__preview--heat');
  } else if (evt.target.closest('input[value="phobos"]')) {
    effectLevelSlider.classList.remove('visually-hidden');
    sliderContainer.classList.remove('visually-hidden');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
      connect: 'lower',
    });
    effectLevelSlider.noUiSlider.on('update', () => {
      imagePreview.style.filter = `blur(${effectLevelSlider.noUiSlider.get()}px)`;
    });
    imagePreview.classList.add('effects__preview--phobos');
    imagePreview.classList.remove('effects__preview--chrome');
    imagePreview.classList.remove('effects__preview--sepia');
    imagePreview.classList.remove('effects__preview--marvin');
    imagePreview.classList.remove('effects__preview--heat');
  } else if (evt.target.closest('input[value="heat"]')) {
    effectLevelSlider.classList.remove('visually-hidden');
    sliderContainer.classList.remove('visually-hidden');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
      connect: 'lower',
    });
    effectLevelSlider.noUiSlider.on('update', () => {
      imagePreview.style.filter = `brightness(${effectLevelSlider.noUiSlider.get()})`;
    });
    imagePreview.classList.add('effects__preview--heat');
    imagePreview.classList.remove('effects__preview--chrome');
    imagePreview.classList.remove('effects__preview--sepia');
    imagePreview.classList.remove('effects__preview--marvin');
    imagePreview.classList.remove('effects__preview--phobos');
  }
}
);

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 100,
  step: 0.1,
  connect: 'lower',
});

const resetSlider = () => {
  scaleControlValue = 100;
  scaleControl.value = `${scaleControlValue}%`;
  imagePreview.style.transform = '';
  scaleValue = 1.0;
  stepImageScale = scaleValue;
  imagePreview.style.filter = '';
  effectLevelSlider.classList.add('visually-hidden');
  sliderContainer.classList.add('visually-hidden');
  imagePreview.classList.remove('effects__preview--chrome');
  imagePreview.classList.remove('effects__preview--sepia');
  imagePreview.classList.remove('effects__preview--marvin');
  imagePreview.classList.remove('effects__preview--phobos');
  imagePreview.classList.remove('effects__preview--heat');
};

export { resetSlider };
