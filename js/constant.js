const PHOTOS_NUMBER = 25;
const COMMENTS_STEP = 5;
const MAX_DESCRIPTON_LENGTHS = 140;
const HASHTAG_MAX_QUANTITY = 5;
const SCALE_CONTROL_STEP = 25;
const SCALE_IMAGE_STEP = 0.25;
const GET_DATA = 'https://28.javascript.pages.academy/kekstagram/data';
const POST_DATA = 'https://28.javascript.pages.academy/kekstagram';
const ALERT_SHOW_TIME = 5000;
const RANDOM_NUMBER_CARD = 10;
const submitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};
const ERROR_MESSAGE = 'Не удалось получить данные';
const STEP_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

const NO_UISLIDER_DEFAULT_RANGE_MIN = 0;
const NO_UISLIDER_DEFAULT_RANGE_MAX = 1;
const NO_UISLIDER_DEFAULT_RANGE_START = 100;
const NO_UISLIDER_DEFAULT_RANGE_STEP = 0.1;

const NO_UISLIDER_CHROME_RANGE_MIN = 0;
const NO_UISLIDER_CHROME_RANGE_MAX = 1;
const NO_UISLIDER_CHROME_RANGE_START = 1;
const NO_UISLIDER_CHROME_RANGE_STEP = 0.1;

const NO_UISLIDER_SEPIA_RANGE_MIN = 0;
const NO_UISLIDER_SEPIA_RANGE_MAX = 1;
const NO_UISLIDER_SEPIA_RANGE_START = 1;
const NO_UISLIDER_SEPIA_RANGE_STEP = 0.1;

const NO_UISLIDER_MARVIN_RANGE_MIN = 0;
const NO_UISLIDER_MARVIN_RANGE_MAX = 100;
const NO_UISLIDER_MARVIN_RANGE_START = 100;
const NO_UISLIDER_MARVIN_RANGE_STEP = 1;

const NO_UISLIDER_PHOBOS_RANGE_MIN = 0;
const NO_UISLIDER_PHOBOS_RANGE_MAX = 3;
const NO_UISLIDER_PHOBOS_RANGE_START = 3;
const NO_UISLIDER_PHOBOS_RANGE_STEP = 0.1;

const NO_UISLIDER_HEAT_RANGE_MIN = 1;
const NO_UISLIDER_HEAT_RANGE_MAX = 3;
const NO_UISLIDER_HEAT_RANGE_START = 3;
const NO_UISLIDER_HEAT_RANGE_STEP = 0.1;

const SliderOption = {
  DEFAULT: {
    range: {
      min: NO_UISLIDER_DEFAULT_RANGE_MIN,
      max: NO_UISLIDER_DEFAULT_RANGE_MAX,
    },
    start: NO_UISLIDER_DEFAULT_RANGE_START,
    step: NO_UISLIDER_DEFAULT_RANGE_STEP,
    connect: 'lower',
  },
  CHROME: {
    range: {
      min: NO_UISLIDER_CHROME_RANGE_MIN,
      max: NO_UISLIDER_CHROME_RANGE_MAX,
    },
    start: NO_UISLIDER_CHROME_RANGE_START,
    step: NO_UISLIDER_CHROME_RANGE_STEP,
  },
  SEPIA: {
    range: {
      min: NO_UISLIDER_SEPIA_RANGE_MIN,
      max: NO_UISLIDER_SEPIA_RANGE_MAX,
    },
    step: NO_UISLIDER_SEPIA_RANGE_STEP,
    start: NO_UISLIDER_SEPIA_RANGE_START,
  },
  MARVIN: {
    range: {
      min: NO_UISLIDER_MARVIN_RANGE_MIN,
      max: NO_UISLIDER_MARVIN_RANGE_MAX,
    },
    step: NO_UISLIDER_MARVIN_RANGE_STEP,
    start: NO_UISLIDER_MARVIN_RANGE_START,
  },
  PHOBOS: {
    range: {
      min: NO_UISLIDER_PHOBOS_RANGE_MIN,
      max: NO_UISLIDER_PHOBOS_RANGE_MAX,
    },
    step: NO_UISLIDER_PHOBOS_RANGE_STEP,
    start: NO_UISLIDER_PHOBOS_RANGE_START,
  },
  HEAT: {
    range: {
      min: NO_UISLIDER_HEAT_RANGE_MIN,
      max: NO_UISLIDER_HEAT_RANGE_MAX,
    },
    step: NO_UISLIDER_HEAT_RANGE_STEP,
    start: NO_UISLIDER_HEAT_RANGE_START,
  },
};

export {
  PHOTOS_NUMBER,
  COMMENTS_STEP,
  MAX_DESCRIPTON_LENGTHS,
  HASHTAG_MAX_QUANTITY,
  SCALE_CONTROL_STEP,
  SCALE_IMAGE_STEP,
  GET_DATA,
  POST_DATA,
  ALERT_SHOW_TIME,
  RANDOM_NUMBER_CARD,
  submitButtonText,
  ERROR_MESSAGE,
  STEP_SCALE,
  MIN_SCALE,
  MAX_SCALE,
  NO_UISLIDER_DEFAULT_RANGE_MIN,
  NO_UISLIDER_DEFAULT_RANGE_MAX,
  NO_UISLIDER_DEFAULT_RANGE_START,
  NO_UISLIDER_DEFAULT_RANGE_STEP,
  NO_UISLIDER_CHROME_RANGE_MIN,
  NO_UISLIDER_CHROME_RANGE_MAX,
  NO_UISLIDER_CHROME_RANGE_START,
  NO_UISLIDER_CHROME_RANGE_STEP,
  NO_UISLIDER_SEPIA_RANGE_MIN,
  NO_UISLIDER_SEPIA_RANGE_MAX,
  NO_UISLIDER_SEPIA_RANGE_START,
  NO_UISLIDER_SEPIA_RANGE_STEP,
  NO_UISLIDER_MARVIN_RANGE_MIN,
  NO_UISLIDER_MARVIN_RANGE_MAX,
  NO_UISLIDER_MARVIN_RANGE_START,
  NO_UISLIDER_MARVIN_RANGE_STEP,
  NO_UISLIDER_PHOBOS_RANGE_MIN,
  NO_UISLIDER_PHOBOS_RANGE_MAX,
  NO_UISLIDER_PHOBOS_RANGE_START,
  NO_UISLIDER_PHOBOS_RANGE_STEP,
  NO_UISLIDER_HEAT_RANGE_MIN,
  NO_UISLIDER_HEAT_RANGE_MAX,
  NO_UISLIDER_HEAT_RANGE_START,
  NO_UISLIDER_HEAT_RANGE_STEP,
  SliderOption,
};
