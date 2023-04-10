const imagePreview = document.querySelector('.img-upload__preview');
const effectsList = document.querySelector('.effects__list');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 100,
  step: 0.1,
  connect: 'lower',
});

const updateSliderOption = (effect) => {
  switch (effect) {
    case 'chrome':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      break;
    case 'sepia':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
        start: 1,
      });
      break;
    case 'marvin':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        step: 1,
        start: 100,
      });
      break;
    case 'phobos':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        step: 0.1,
        start: 3,
      });
      break;
    case 'heat':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        step: 0.1,
        start: 3,
      });
      break;
  }
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
