import {
  STEP_SCALE,
  MIN_SCALE,
  MAX_SCALE,
} from './constant.js';

let scaleValue = MAX_SCALE;

const scaleControl = document.querySelector('.scale__control--value');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview img');

const renderScaleValue = () => {
  scaleControl.value = `${scaleValue}%`;
};

const renderScaleImage = () => {
  imagePreview.style.transform = `scale(${scaleValue * 0.01})`;
};

scaleControlSmaller.addEventListener('click', () => {
  scaleValue = scaleValue - STEP_SCALE >= MIN_SCALE ? scaleValue - STEP_SCALE : MIN_SCALE;
  renderScaleValue();
  renderScaleImage();
});

scaleControlBigger.addEventListener('click', () => {
  scaleValue = scaleValue + STEP_SCALE <= MAX_SCALE ? scaleValue + STEP_SCALE : MAX_SCALE;
  renderScaleValue();
  renderScaleImage();
});

const resetScale = () => {
  scaleValue = MAX_SCALE;
  renderScaleValue();
  renderScaleImage();
};

export { resetScale };
