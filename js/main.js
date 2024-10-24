/*
const photoArray = [
  {id: от 1 до 25,
    url: 'photos/' + число от 1 до 25 +'.jpg',
    description: 'Hello! It is my photo!',
    likes: случайное число от 15 до 200,
    comments: массив объектов от 0 до 30 [{
       случайный набор,
    }],}
]*/

const generateArray = (countElement) => [...Array(countElement).keys()].map((index)=>index + 1);

const createNumberId = (countElement) => {
  let currentId;
  let indexId = 0;

  return function (){
    currentId = generateArray(countElement)[indexId];
    indexId += 1;
    return currentId;
  };
};

const generateRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const createGeneratorRandomNumber = (min, max)=> {
  let randomValue;
  return function () {
    randomValue = generateRandomInteger(min, max);
    return randomValue;
  };
};

const generatePhotoId = createNumberId(25);
const generateNumberForUrl = createNumberId(25);
const generateCommentId = createNumberId(1000000);

const createComments = () => {
  const generateRandomForAvatar = createGeneratorRandomNumber(1, 6);
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${ generateRandomForAvatar() }.svg`,
    message: '1 или 2 случайных предложения из предложенных',
    username: '',
  };
};


const createDescriptionPhotos = () => {
  const generateLikes = createGeneratorRandomNumber(15, 200);
  const generateComments = createGeneratorRandomNumber(0, 30);
  return {
    id: generatePhotoId(),
    url: `photos/${ generateNumberForUrl()}.jpg`,
    description: 'Hello! It is my photo!',
    likes: generateLikes(),
    comments: Array.from({length: generateComments()}, createComments),
  };
};

const descriptionPhotosList = Array.from({length: 25},createDescriptionPhotos);

console.log(descriptionPhotosList);

