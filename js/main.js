const PHOTOS_NUMBER = 25;
const LIKES_NUMBER_MIN = 15;
const LIKES_NUMBER_MAX = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 20;
const COMMENTS_NUMBER = 20000;
const AVATAR_NUMBER_MIN = 1;
const AVATAR_NUMBER_MAX = 6;
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
];

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= max - min + 1) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getUniqId = createRandomIdFromRangeGenerator(1, PHOTOS_NUMBER);
const getUniqUrl = createRandomIdFromRangeGenerator(1, PHOTOS_NUMBER);
const getCommentId = createRandomIdFromRangeGenerator(1, COMMENTS_NUMBER);

const getComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_NUMBER_MIN, AVATAR_NUMBER_MAX)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

const getComments = (n) => {
  const comments = [];
  for (let i = 0; i < n; i++) {
    comments.push(getComment());
  }
  return comments;
};

const getPhoto = () => ({
  id: getUniqId(),
  url: `photos/${getUniqUrl()}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(LIKES_NUMBER_MIN, LIKES_NUMBER_MAX),
  comments: getComments(getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)),
});

const getPhotos = (n) => {
  const photos = [];
  for (let i = 0; i < n; i++) {
    photos.push(getPhoto());
  }
  return photos;
};

getPhotos(PHOTOS_NUMBER);
