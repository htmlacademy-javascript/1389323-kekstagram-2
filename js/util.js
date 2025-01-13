import {TIMEOUT_DELAY} from './constants.js';

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

const debounce = (callback, timeoutDelay = TIMEOUT_DELAY) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {isEscapeKey, getIndexes, isDuplicate, detailsError, debounce};
