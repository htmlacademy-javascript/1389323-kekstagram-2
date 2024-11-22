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


let indexStart;

const renderStartIndex = (step, elements) => {
  indexStart = -1 * step;
  return function () {
    indexStart += step;
    if (indexStart < elements.length) {
      return indexStart;
    }
  };
};

const renderMaxIndex = (step, elements) => {
  let maxIndex = indexStart + step;
  return function () {
    maxIndex += step;
    if (maxIndex < elements.length) {
      return maxIndex;
    } else {
      return elements.length;
    }
  };
};

const getIndexes = (comments, step) => {
  const min = renderStartIndex(step, comments);
  const max = renderMaxIndex(step, comments);
  let indexesElement;

  return function () {
    indexesElement = [min(), max()];
    return indexesElement;
  };
};


export {createNumberId, getRandomInteger, getRandomArrayElement, findIndexElementTarget, isEscapeKey, getIndexes };
