import { SliderOption } from './constant.js';

const imagePreview = document.querySelector('.img-upload__preview');
const effectsList = document.querySelector('.effects__list');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, SliderOption.DEFAULT);

const updateSliderOption = (effect) => {
  const effectObject = SliderOption[effect.toUpperCase()];
  sliderElement.noUiSlider.updateOptions(effectObject);
};

const renderEffect = (effect) => {
  let filterStyle = '';
  switch (effect) {
    case 'chrome':
      filterStyle = `grayscale(${valueElement.value})`;
      break;
    case 'sepia':
      filterStyle = `sepia(${valueElement.value})`;
      break;
    case 'marvin':
      filterStyle = `invert(${valueElement.value}%)`;
      break;
    case 'phobos':
      filterStyle = `blur(${valueElement.value}px)`;
      break;
    case 'heat':
      filterStyle = `brightness(${valueElement.value})`;
      break;
  }
  imagePreview.style.filter = filterStyle;
};

sliderElement.noUiSlider.on('update', () => {
  renderEffect(document.querySelector('.effects__radio:checked').value);
  valueElement.value = sliderElement.noUiSlider.get();
});

effectsList.addEventListener('change', (evt) => {
  if (evt.target.name === 'effect') {
    if (evt.target.value === 'none') {
      imagePreview.style.filter = '';
      sliderContainer.classList.add('visually-hidden');
    } else {
      updateSliderOption(evt.target.value);
      renderEffect(evt.target.value);
      sliderContainer.classList.remove('visually-hidden');
    }
  }
});

const resetSlider = () => {
  imagePreview.style.filter = '';
  sliderContainer.classList.add('visually-hidden');
};

export { resetSlider };
