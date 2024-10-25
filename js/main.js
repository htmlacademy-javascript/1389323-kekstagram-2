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

const generateArray = (countElement) => [...Array(countElement).keys()].map((index)=>index + 1);

const createNumberId = (countElement = '') => {
  let currentId;
  let indexId = 0;

  if (countElement === '') {
    return function () {
      indexId += 1;
      return indexId;
    };
  }

  return function (){
    currentId = generateArray(countElement)[indexId];
    indexId += 1;
    return currentId;
  };
};

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const generatePhotoId = createNumberId(25);
const generateNumberForUrl = createNumberId(25);
const generateCommentId = createNumberId();

const createComments = () =>
  ({
    id: generateCommentId(),
    avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
    message: getRandomArrayElement(MESSAGE_IN_COMMENTS),
    username: getRandomArrayElement(USERS_NAMES),
  });

const createDescriptionPhotos = () =>
  ({
    id: generatePhotoId(),
    url: `photos/${ generateNumberForUrl()}.jpg`,
    description: 'Hello! It is my photo!',
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(0, 30)}, createComments),
  });

const descriptionPhotosList = Array.from({length: 25},createDescriptionPhotos);

//console.table(descriptionPhotosList);

