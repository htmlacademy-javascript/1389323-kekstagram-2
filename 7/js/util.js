const createNumberId = () => {
  let indexId = 0;

  return function () {
    indexId += 1;
    return indexId;
  };
};

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const findIndexElementTarget = (arrayElement, elementTarget) => {
  let currentIndex;
  arrayElement.forEach((element, elementIndex)=> {
    if (element.src === elementTarget.src) {
      currentIndex = elementIndex;
      return currentIndex;
    }
  });
  return currentIndex;
};

const isEscapeKey = (evt) => evt.key === 'Escape';


export {createNumberId, getRandomInteger, getRandomArrayElement, findIndexElementTarget, isEscapeKey};
