import {createNumberId, getRandomInteger, getRandomArrayElement} from './util.js';

const MESSAGE_IN_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const USERS_NAMES = [
  'Vasiliy',
  'Maria',
  'Ivan',
  'Anna',
  'John',
  'Eva',
];

const DESCRIPTION_LIST = [
  'Hello! It is my photo!',
  'Beautifull',
  'Mood',
  'My morning',
];

const COUNT_ELEMENT = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;

const generatePhotoId = createNumberId();
const generateNumberForUrl = createNumberId();
const generateCommentId = createNumberId();

const createComments = () =>
  ({
    id: generateCommentId(),
    avatar: `img/avatar-${ getRandomInteger(AVATAR_MIN, AVATAR_MAX) }.svg`,
    message: getRandomArrayElement(MESSAGE_IN_COMMENTS),
    name: getRandomArrayElement(USERS_NAMES),
  });

const createDescriptionPhotos = () =>
  ({
    id: generatePhotoId(),
    url: `photos/${ generateNumberForUrl()}.jpg`,
    description: getRandomArrayElement(DESCRIPTION_LIST),
    likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
    comments: Array.from({length: getRandomInteger(COMMENTS_MIN, COMMENTS_MAX)}, createComments),
  });

const descriptionPhotosList = Array.from({length: COUNT_ELEMENT},createDescriptionPhotos);

export {descriptionPhotosList};


