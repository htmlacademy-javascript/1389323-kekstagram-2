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

const isDuplicate = (elements) => {
  const duplicateElement = elements.filter((item, index, items) => items.indexOf(item) !== index);
  return duplicateElement.length > 0;
};

const detailsError = (elements, errors, settings) => {
  let detaleError;
  elements.forEach((hashtag) => {
    if (!settings.FIRST_SYMBOL.test(hashtag)) {
      detaleError = errors.ERROR_NO_HASHTAG;
    } else if (settings.MIN > hashtag.length) {
      detaleError = errors.ERROR_ONLY_HASHTAG;
    } else if (hashtag.length > settings.MAX) {
      detaleError = errors.ERROR_LENGTH_HASHTAG;
    } else if (!settings.ALLOWED_VALUE.test(hashtag)) {
      detaleError = errors.ERROR_NO_VALID_SYMBOL;
    }
  });
  return detaleError;
};

export {createNumberId, getRandomInteger, getRandomArrayElement, findIndexElementTarget, isEscapeKey, getIndexes, isDuplicate, detailsError };
