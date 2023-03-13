import {
  getRandomInteger,
  createRandomIdFromRangeGenerator
} from './util.js';
import {
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
} from './constant.js';

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

export { getPhotos };
