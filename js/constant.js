const PHOTOS_NUMBER = 25;
const LIKES_NUMBER_MIN = 15;
const LIKES_NUMBER_MAX = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 20;
const COMMENTS_NUMBER = 20000;
const AVATAR_NUMBER_MIN = 1;
const AVATAR_NUMBER_MAX = 6;
const COMMENTS_STEP = 5;
const DESCRIPTIONS = [
  'Хорошо, конечно, попасть бы в сказку с хорошим концом, да сказки-то эти, может, не самые хорошие.',
  'Никто не может избежать страданий. Ни Бог, ни ты. Ни твои родители, ни я.',
  'Я не хочу носить корону. Я не хочу быть королем. Я хочу носить корону, когда умру. Пока я хочу продолжать расти. Я работаю на прогресс.',
  'Раз уж приходится умереть, то, очевидно, не имеет большого значения, когда и как ты умрешь.',
  'Что делать, если на природе вам встретился медведь? Правильно, притворитесь мёртвым. А знаете почему? Потому что именно так вы будете выглядеть через минуту. Просто чтобы не тратить время.',
  'Видеть и делать — это совершенно разные вещи.',
  'Не нужно бояться проигрывать. Главное — оставаться живым.',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный моме',
];

const NAMES = [
  'Игорь',
  'Владимир',
  'Ирина',
  'Татьяна',
  'Сергей',
  'Иван',
  'Павел',
  'Алена',
  'Марсель',
  'Оксана',
  'Лиза',
  'Владислав',
  'Константин',
  'Алексей',
  'Александр',
  'Светлана',
  'Милана',
  'Мария',
  'Юрий',
];

const MAX_DESCRIPTON_LENGTHS = 140;
const HASHTAG_MAX_QUANTITY = 5;
const SCALE_CONTROL_STEP = 25;
const SCALE_IMAGE_STEP = 0.25;
const GET_DATA = 'https://28.javascript.pages.academy/kekstagram/data';
const POST_DATA = 'https://28.javascript.pages.academy/kekstagram';
const ALERT_SHOW_TIME = 5000;

export {
  PHOTOS_NUMBER,
  LIKES_NUMBER_MIN,
  LIKES_NUMBER_MAX,
  MIN_COMMENTS,
  MAX_COMMENTS,
  COMMENTS_NUMBER,
  AVATAR_NUMBER_MIN,
  AVATAR_NUMBER_MAX,
  DESCRIPTIONS,
  MESSAGES,
  NAMES,
  COMMENTS_STEP,
  MAX_DESCRIPTON_LENGTHS,
  HASHTAG_MAX_QUANTITY,
  SCALE_CONTROL_STEP,
  SCALE_IMAGE_STEP,
  GET_DATA,
  POST_DATA,
  ALERT_SHOW_TIME,
};
